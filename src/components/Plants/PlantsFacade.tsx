import { useState } from 'react';
import { matchSorter } from 'match-sorter';
import PlantList from './PlantList';
import safe from 'data/plants/safe.json';
import toxic from 'data/plants/toxic.json';
import { sortByName } from 'utils/array';

export default function PlantsFacade() {
  const plants = [...safe, ...toxic];
  const sortedPlants = plants.sort(sortByName('pl'));

  const [query, setQuery] = useState('');
  const [results, setResults] = useState(sortedPlants);

  function handleInputChange(e) {
    const queryResults = matchSorter(plants, e.target.value, {
      threshold: matchSorter.rankings.WORD_STARTS_WITH,
      keys: ['name.pl', 'name.en', 'name.lat'],
    });

    setQuery(e.target.value);
    setResults(queryResults);
  }

  // FIXME: typescript
  return (
    <>
      <input
        type="search"
        placeholder="Fiołek"
        value={query}
        className="text-lg block mt-20 h-20 w-full p-6 focus:shadow-lg rounded-lg border-2 border-gray-light 
        focus:ring-4 focus:ring-blue focus:ring-opacity-30 focus:border-blue focus:outline-none"
        onChange={(event) => handleInputChange(event)}
      />
      <PlantList plants={results} />
    </>
  );
}
