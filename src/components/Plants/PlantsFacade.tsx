import { useState, useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import { polishPlurals } from 'polish-plurals';
import PlantList from './PlantList';
import Search from 'components/Search';
import Filter from 'components/Filter';
import Title from 'components/Title';
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
  const [showToxic, setShowToxic] = useState(false);
  const [showSafe, setShowSafe] = useState(false);

  const plants = [];
    // !showSafe && !showToxic
    //   ? [...safe, ...toxic]
    //   : [...(showSafe ? safe : []), ...(showToxic ? toxic : [])];

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
    <div className="relative">
      <Title />
      <div className="relative md:w-2/3 sm:ml-auto mlg:mx-auto w-full max-w-screen-sm">
        <Search query={query} onChange={(e) => handleInputChange(e)} />
        <div className="absolute top-5 right-6 space-x-1">
          <Filter
            text="Trujące"
            active={showToxic}
            onClick={() => setShowToxic(!showToxic)}
          />
          <Filter
            text="Bezpieczne"
            active={showSafe}
            onClick={() => setShowSafe(!showSafe)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-16 md:mt-28 mb-10">
        <div className="font-info text-xs text-dark w-40">
          Znaleziono <span className="font-bold">{counter}</span>{' '}
          {plantPluralForm}
        </div>
        <div className="h-px w-full bg-gray-light bg-opacity-30 max-w-screen-sm mx-4" />
        <SortingOrder
          value={sortOrder}
          onChange={(e) => handleSelectChange(e)}
        />
      </div>
      <PlantList plants={sortedResults} query={query} />
    </div>
  );
}
