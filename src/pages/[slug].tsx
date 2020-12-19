import { useRouter } from 'next/router';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import PlantDetails from 'components/PlantDetails/PlantDetails';
import safe from 'data/plants/safe.json';
import toxic from 'data/plants/toxic.json';

const plants = [...safe, ...toxic];

const PlantPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // TODO handle case when user types 'fiolek'
  // and we have slugs 'fiolek-afrykanski', 'fiolek-alpejski'
  // display possibilities?
  const plant = plants.find((plant) => plant.slug === slug);

  if (!plant) {
    // TODO: 404 page?
    // FIXME: it's displayed for a moment even if plant exists
    return <p>No plant found</p>;
  }

  return (
    <div>
      <Head>
        <title>Rośliny dla kota</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-7xl mx-auto">
        <PlantDetails plant={plant} />
      </div>
    </div>
  );
};

export default PlantPage;
