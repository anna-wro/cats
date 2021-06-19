import { useRouter } from 'next/router';
// import Navigation from 'components/Navigation';
import PlantsFacade from 'components/Plants/PlantsFacade';
import PlantDetailsFacade from 'components/PlantDetails/PlantDetailsFacade';
import Layout from 'components/Layout';
import { makeStartCase } from 'utils/text';
import { getAllPlants } from 'lib/api';

export default function Home({ plants }) {
  const router = useRouter();
  const { slug } = router.query;
  let plant;

  if (slug) {
    plant = [...plants.safe, ...plants.toxic].find(
      plant => plant.slug === slug[0],
    );
  }

  const plantTitle = plant?.name?.pl[0]
    ? `${makeStartCase(plant.name.pl[0])} - `
    : '';

  return (
    <Layout title={`${plantTitle}Rośliny dla kota`}>
      <div className={`flex-1 ${plant ? 'fixed' : ''}`}>
        {/* {!plant && <Navigation />} */}
        <div
          className={`${
            plant ? '' : 'max-w-7xl mx-auto pb-24 px-4 pt-8 md:px-20 '
          }`}
        >
          {plant && <PlantDetailsFacade plant={plant} />}
          <PlantsFacade items={plants} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const plants = await getAllPlants();
  return {
    paths: [
      { params: { slug: [] } },
      ...[...plants.safe, ...plants.toxic].map(plant => ({
        params: { slug: [plant.slug] },
      })),
    ],
    fallback: 'blocking',
  };
}

export async function getStaticProps() {
  const plants = await getAllPlants();

  return {
    props: { plants },
    revalidate: 1,
  };
}
