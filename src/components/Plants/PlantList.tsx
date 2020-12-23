import PlantFiche from 'components/PlantFiche/PlantFiche';
import PlantCard from 'components/PlantCard/PlantCard';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import useWindowSize from 'utils/useWindowSize';

type PlantGroupType = {
  plants: PlantType[];
};

const MOBILE_WIDTH = 480;

export default function PlantList({ plants }: PlantGroupType) {
  const { width } = useWindowSize();

  return width <= MOBILE_WIDTH ? (
    <>
      {plants.map((plant) => (
        <div className="mb-6">
          <PlantFiche key={plant.slug} plant={plant} />
        </div>
      ))}
    </>
  ) : (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-6">
      {plants.map((plant) => (
        <PlantCard key={plant.slug} plant={plant} />
      ))}
    </div>
  );
}
