import { useState } from 'react';
import { matchSorter } from 'match-sorter';
import { polishPlurals } from 'polish-plurals';
import PlantList from './PlantList';
import Search from '../Search';
import safe from 'data/plants/safe.json';
import toxic from 'data/plants/toxic.json';
import { sortByName } from 'utils/array';

export default function PlantsFacade() {
  const plants = [...safe, ...toxic];
  const sortedPlants = plants.sort(sortByName('pl'));

  const [query, setQuery] = useState('');
  const [results, setResults] = useState(sortedPlants);
  const counter = results.length;
  const plantPluralForm = polishPlurals(
    'roślinę',
    'rośliny',
    'roślin',
    counter,
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const queryResults = matchSorter(plants, e.currentTarget.value, {
      threshold: matchSorter.rankings.WORD_STARTS_WITH,
      keys: ['name.pl', 'name.en', 'name.lat'],
    });

    setQuery(e.currentTarget.value);
    setResults(queryResults);
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
