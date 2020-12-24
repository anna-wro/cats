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

const plants = [...safe, ...toxic];

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
    [throttled],
  );
}

export default function PlantsFacade() {
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('+');

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
      <Search query={query} onChange={(e) => handleInputChange(e)} />
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
