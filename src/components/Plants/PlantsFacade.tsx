import PlantList from './PlantList';
import safe from '../../data/plants/safe.json';
import toxic from '../../data/plants/toxic.json';
import { sortByName } from '../../utils/array';

export default function PlantsFacade() {
  const plants = [...safe, ...toxic];
  const sortedPlants = plants.sort(sortByName('pl'));

  return (
    <div className="grid grid-flow-col auto-cols-auto">
      <div>
        <div className="text-lg py-6">From 🅰 to 🆉:</div>
        <div className="text pb-6  text-gray-600">{plants.length} plants</div>
        <PlantList plants={sortedPlants} />
      </div>
    </div>
  );
}
