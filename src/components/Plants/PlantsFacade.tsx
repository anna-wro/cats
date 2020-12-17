import { useState, useEffect } from 'react';
import { matchSorter } from 'match-sorter';
import { polishPlurals } from 'polish-plurals';
import PlantList from './PlantList';
import Search from '../Search';
import safe from 'data/plants/safe.json';
import toxic from 'data/plants/toxic.json';
import { sortByName } from 'utils/array';
import { useThrottle } from 'use-throttle';

function usePlantSearch(searchTerm, plants) {
  const [results, setResults] = useState(plants);
  const throttled = useThrottle(searchTerm, 500);

  useEffect(() => {
    if (throttled) {
      if (throttled.trim() !== '') {
        let current = true;

        const queryResults = matchSorter(plants, searchTerm, {
          threshold: matchSorter.rankings.WORD_STARTS_WITH,
          keys: ['name.pl', 'name.en', 'name.lat'],
        });

        setResults(queryResults);
        return () => (current = false);
      }
    } else if (searchTerm === '') {
      setResults(plants);
    }
  }, [throttled]);

  return results;
}

export default function PlantsFacade() {
  const plants = [...safe, ...toxic];
  const sortedPlants = plants.sort(sortByName('pl'));

  const [query, setQuery] = useState('');

  const results = usePlantSearch(query, plants);
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

  // FIXME: typescript
  return (
    <>
      <Search query={query} onChange={(e) => handleInputChange(e)} />
      <div className="mt-28">
        Znaleziono <span className="font-bold">{counter}</span>{' '}
        {plantPluralForm}
      </div>
      <PlantList plants={results} />
    </>
  );
}
