import Plant from './Plant';
import type {PlantType} from './Plant';

type PlantGroupType = {
  plants: PlantType[]
};

export default function PlantList({ plants }: PlantGroupType) {
  return (
    <>
      {plants.map((plant, index) => (
        <Plant key={index} plant={plant} />
      ))}
    </>
  );
}
