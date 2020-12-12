import PlantList from './PlantList';
import safe from 'data/plants/safe.json';
import toxic from 'data/plants/toxic.json';
import { sortByName } from 'utils/array';

export default function PlantsFacade() {
  const plants = [...safe, ...toxic];
  const sortedPlants = plants.sort(sortByName('pl'));

  return <PlantList plants={sortedPlants} />;
}
