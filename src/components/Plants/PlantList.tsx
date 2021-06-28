import PlantFiche from 'components/PlantFiche/PlantFiche';
import PlantCard from 'components/PlantCard/PlantCard';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import { useWindowSize } from 'utils/useWindowSize';

type PlantListType = Readonly<{
  plants: PlantType[];
  query: string;
}>;

export default function PlantList({ plants, query }: PlantListType) {
  const { isMobile } = useWindowSize();

  return isMobile ? (
    <main>
      {plants.map(plant => (
        <div className="mb-6" key={plant.slug}>
          <PlantFiche plant={plant} query={query} />
        </div>
      ))}
    </main>
  ) : (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {plants.map(plant => (
        <PlantCard key={plant.slug} plant={plant} query={query} />
      ))}
    </main>
  );
}
