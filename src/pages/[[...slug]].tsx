import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from 'components/Navigation';
import PlantsFacade from 'components/Plants/PlantsFacade';
import PlantDetails from 'components/PlantDetails/PlantDetails';
import Footer from 'components/Footer';
import { makeStartCase } from 'utils/text';
import safe from 'data/plants/safe.json';
import toxic from 'data/plants/toxic.json';
const plants = [...safe, ...toxic];

export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
  let plant;

  if (slug) {
    plant = plants.find((plant) => plant.slug === slug[0]);
  }

  const plantTitle = plant?.name?.pl[0]
    ? `${makeStartCase(plant.name.pl[0])} - `
    : null;

  return (
    <div className="flex flex-col min-h-screen font-main">
      <Head>
        <title>{plantTitle} Rośliny dla kota</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Montserrat:wght@300;400;500;600;700&family=Nunito:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex-1">
        {!plant && <Navigation />}
        <div
          className={`max-w-7xl mx-auto px-20 ${plant ? undefined : 'pb-24'}`}
        >
          {plant && <PlantDetails plant={plant} />}
          <PlantsFacade />
        </div>
      </div>
      <Footer />
    </div>
  );
}
