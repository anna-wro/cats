import PlantFiche from 'components/PlantFiche/PlantFiche';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import useWindowSize from 'utils/useWindowSize';

type PlantGroupType = {
  plants: PlantType[];
};

const MOBILE_WIDTH = 480;

export default function PlantList({ plants }: PlantGroupType) {
  const { width } = useWindowSize();

  return width <= MOBILE_WIDTH ? (
    <div className="mt-10">
      {plants.map((plant) => (
        <div className="mb-6">
          <PlantFiche key={plant.slug} plant={plant} />
        </div>
      ))}
    </div>
  ) : (
    <div className="grid lg:grid-cols- md:grid-cols-2 gap-y-10 mt-20 gap-x-28">
      {plants.map((plant) => (
        <PlantFiche key={plant.slug} plant={plant} />
      ))}
    </div>
  );
}
