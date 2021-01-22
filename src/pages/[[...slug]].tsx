import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from 'components/Navigation';
import PlantsFacade from 'components/Plants/PlantsFacade';
import PlantDetails from 'components/PlantDetails/PlantDetails';
import Footer from 'components/Footer';
import { makeStartCase } from 'utils/text';
import safe from 'data/plants/safe.json';
import toxic from 'data/plants/toxic.json';
import Airtable from 'airtable';

//const plants = [...safe, ...toxic];
//const plants = [];

export default function Home(props) {
  //console.log('props -> plants', JSON.stringify(plants, null, 2));
  const plants = [];
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
          <PlantsFacade />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function mapRecordToPlant(record) {
  return {
    name: {
      pl: record['name.pl'].split(','),
      en: record['name.en'].split(','),
      lat: record['name.lat'],
    },
    slug: record.slug,
    imageID: record.imageID.split(','),
    danger: record.danger,
    source: record.source.split(','),
    ID: record.ID,
    symptoms: record.symptoms,
    note: record.note,
  };
}

export async function getServerSideProps(context) {
  const base = Airtable.base('app0awhBu3GphBQkq');
  console.log(base.table);

  const result = await new Promise((resolve, reject) => {
    const res = [];
    ['Safe', 'Toxic'].forEach((type) => {
      base(type)
        .select({
          // Selecting the first 3 records in Grid view:
          view: 'Grid view',
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function (record) {
              res.push(mapRecordToPlant(record));
            });

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              reject([]);
              return;
            }
            resolve(res);
          },
        );
    });
  });

  console.log('result', JSON.stringify(result, null, 2));

  return {
    props: { plants: result },
  };
}
