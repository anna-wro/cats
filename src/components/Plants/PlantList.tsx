import PlantFiche from 'components/PlantFiche/PlantFiche';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantGroupType = {
  plants: PlantType[];
};

export default function PlantList({ plants }: PlantGroupType) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 mt-20 gap-x-28">
      {plants.map((plant) => (
        <PlantFiche key={plant.slug} plant={plant} />
      ))}
    </div>
  );
}
