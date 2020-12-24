import { useState, useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import { polishPlurals } from 'polish-plurals';
import PlantList from './PlantList';
import Search from 'components/Search';
import SortingOrder from 'components/SortingOrder';
import safe from 'data/plants/safe.json';
import toxic from 'data/plants/toxic.json';
import { sortByName } from 'utils/array';
import { useThrottle } from 'use-throttle';

function usePlantSearch(searchTerm, plants) {
  const throttled = useThrottle(searchTerm, 300);

  return useMemo(
    () =>
      searchTerm.trim() === ''
        ? plants
        : matchSorter(plants, throttled, {
            threshold: matchSorter.rankings.WORD_STARTS_WITH,
            keys: ['name.pl', 'name.en', 'name.lat'],
          }),
    [throttled, plants],
  );
}

export default function PlantsFacade() {
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('+');
  const [showToxic, setShowToxic] = useState(true);
  const [showSafe, setShowSafe] = useState(true);

  const plants = [...(showSafe ? safe : []), ...(showToxic ? toxic : [])];

  const results = usePlantSearch(query, plants);
  const sortedResults = results.sort(sortByName(`${sortOrder}pl`));
  const counter = results.length;
  const plantPluralForm = polishPlurals(
    'roślinę',
    'rośliny',
    'roślin',
    counter,
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortOrder(e.currentTarget.value);
  }

  return (
    <>
      <div className="relative mx-auto w-full max-w-screen-sm">
        <Search query={query} onChange={(e) => handleInputChange(e)} />
        <div className="absolute top-5 right-6">
          <div
            className={`filter mr-1 ${
              showToxic ? 'text-gray' : 'text-gray-light'
            }`}
            onClick={() => setShowToxic(!showToxic)}
          >
            Trujące
          </div>
          <div
            className={`filter ${showSafe ? 'text-gray' : 'text-gray-light'}`}
            onClick={() => setShowSafe(!showSafe)}
          >
            Bezpieczne
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-28 mb-10 f">
        <div className="text-xs text-dark">
          Znaleziono <span className="font-bold">{counter}</span>{' '}
          {plantPluralForm}
        </div>
        <div className="h-px w-full bg-gray-light bg-opacity-30 max-w-screen-sm" />
        <SortingOrder
          value={sortOrder}
          onChange={(e) => handleSelectChange(e)}
        />
      </div>

      <PlantList plants={sortedResults} query={query} />
    </>
  );
}
