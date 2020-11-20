import PlantList from './PlantList';
import safe from '../../data/plants/safe.json';
import toxic from '../../data/plants/toxic.json';
import { shuffleArray, sortByName } from '../../utils/array';

export default function PlantsFacade() {
  const plants = [...safe, ...toxic];
  const sortedPlants = plants.sort(sortByName('pl'));
  const shuffledPlants = shuffleArray(plants);

  return (
    <div className="grid grid-flow-col auto-cols-auto">
      <div>
        <div>
          <div className="text-lg py-6">From 🅰 to 🆉:</div>
          <PlantList plants={sortedPlants} />
        </div>
      </div>
      <div>
        <div>
          <div className="text-lg py-6">Random 🎲:</div>
          <PlantList plants={shuffledPlants} />
        </div>
      </div>
    </div>
  );
}
