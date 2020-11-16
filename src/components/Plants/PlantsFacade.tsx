import PlantList from './PlantList';
import safe from '../../data/plants/safe.json';
import toxic from '../../data/plants/toxic.json';
import { shuffleArray } from '../../utils/shuffleArray';

export default function PlantsFacade() {
  const plants = [...safe, ...toxic];
  shuffleArray(plants);

//   FIXME: types
  return <PlantList plants={plants} />;
}
