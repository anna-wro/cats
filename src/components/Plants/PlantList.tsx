import Plant from './Plant';
import type PlantType from './Plant';

type PlantGroupType = {
  [key: string]: typeof PlantType;
};

export default function PlantList({ plants }: PlantGroupType) {
  // FIXME: Property 'map' does not exist on type 'PlantType'
  return (
    <>
      {plants.map((plant, index) => (
        <Plant key={index} plant={plant} />
      ))}
    </>
  );
}
