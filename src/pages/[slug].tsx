import { useRouter } from 'next/router';
import safe from 'data/plants/safe.json';
import toxic from 'data/plants/toxic.json';
import PlantDetails from 'components/PlantDetails/PlantDetails';

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

  return <PlantDetails plant={plant} />;
};

export default PlantPage;
