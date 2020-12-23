import { useState, useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import { polishPlurals } from 'polish-plurals';
import PlantList from './PlantList';
import Search from '../Search';
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
  const sortedPlants = plants.sort(sortByName('pl'));

  const [query, setQuery] = useState('');

  const results = usePlantSearch(query, sortedPlants);
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

  return (
    <>
      <Search query={query} onChange={(e) => handleInputChange(e)} />
      <div className="mt-28 mb-10">
        Znaleziono <span className="font-bold">{counter}</span>{' '}
        {plantPluralForm}
      </div>
      <PlantList plants={results} query={query} />
    </>
  );
}
