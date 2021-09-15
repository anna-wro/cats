import PlantFiche from 'components/PlantFiche/PlantFiche';
import PlantCard from 'components/PlantCard/PlantCard';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantListType = Readonly<{
  plants: PlantType[];
  query: string;
}>;

export default function PlantList({ plants, query }: PlantListType) {
  return (
    <>
      <main id="main" className="scroll-margin md:hidden">
        {plants.map(plant => (
          <div className="mb-6" key={plant.slug}>
            <PlantFiche plant={plant} query={query} />
          </div>
        ))}
      </main>
      <main
        id="main"
        className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 scroll-margin"
      >
        {plants.map(plant => (
          <PlantCard key={plant.slug} plant={plant} query={query} />
        ))}
      </main>
    </>
  );
}
