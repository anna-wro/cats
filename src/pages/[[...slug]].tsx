import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from 'components/Navigation';
import PlantsFacade from 'components/Plants/PlantsFacade';
import PlantDetails from 'components/PlantDetails/PlantDetails';
import Footer from 'components/Footer';
import { makeStartCase } from 'utils/text';
import { getAllPlants } from 'lib/api';

export default function Home({ plants }) {
  const router = useRouter();
  const { slug } = router.query;
  let plant;

  if (slug) {
    plant = [...plants.safe, ...plants.toxic].find(
      (plant) => plant.slug === slug[0],
    );
  }

  const plantTitle = plant?.name?.pl[0]
    ? `${makeStartCase(plant.name.pl[0])} - `
    : null;

  return (
    <div className="flex flex-col min-h-screen font-main text-dark">
      <Head>
        <title>{plantTitle} Rośliny dla kota</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Montserrat:wght@300;400;500;600;700&family=Nunito:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={`flex-1 ${plant ? 'fixed' : ''}`}>
        {!plant && <Navigation />}
        <div
          className={`${
            plant ? undefined : 'max-w-7xl mx-auto pb-24 px-10 md:px-20 '
          }`}
        >
          {plant && <PlantDetails plant={plant} />}
          <PlantsFacade items={plants} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const plants = await getAllPlants();
  console.log({ plants });
  return {
    paths: [
      { params: { slug: [] } },
      ...[...(plants.safe as any), ...(plants.toxic as any)].map((plant) => ({
        params: { slug: [plant.slug] },
      })),
    ],
    fallback: true,
  };
}

export async function getStaticProps() {
  const plants = await getAllPlants();

  return {
    props: { plants },
    revalidate: 1,
  };
}
