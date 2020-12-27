import PlantFiche from 'components/PlantFiche/PlantFiche';
import PlantCard from 'components/PlantCard/PlantCard';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import useWindowSize from 'utils/useWindowSize';

type PlantListType = Readonly<{
  plants: PlantType[];
  query: string;
}>;

const MOBILE_WIDTH = 480;

export default function PlantList({ plants, query }: PlantListType) {
  const { width } = useWindowSize();

  return width <= MOBILE_WIDTH ? (
    <>
      {plants.map((plant) => (
        <div className="mb-6">
          <PlantFiche key={plant.slug} plant={plant} query={query} />
        </div>
      ))}
    </>
  ) : (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-6">
      {plants.map((plant) => (
        <PlantCard key={plant.slug} plant={plant} query={query} />
      ))}
    </div>
  );
}
