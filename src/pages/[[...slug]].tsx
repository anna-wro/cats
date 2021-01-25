import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from 'components/Navigation';
import PlantsFacade from 'components/Plants/PlantsFacade';
import PlantDetails from 'components/PlantDetails/PlantDetails';
import Footer from 'components/Footer';
import { makeStartCase } from 'utils/text';
import Airtable from 'airtable';

export default function Home({ plants }) {
  //console.log('props -> plants', JSON.stringify(plants, null, 2));

  const router = useRouter();
  const { slug } = router.query;
  let plant;

  if (slug) {
    plant = plants.all.find((plant) => plant.slug === slug[0]);
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
    symptoms: record.symptoms ?? null,
    note: record.note ?? null,
  };
}

export async function getServerSideProps() {
  const base = Airtable.base('app0awhBu3GphBQkq');

  const result: {
    safe: Array<Object>;
    toxic: Array<Object>;
  } = await new Promise((resolve, reject) => {
    const res = {
      safe: [],
      toxic: [],
      all: [],
    };

    ['Safe', 'Toxic'].forEach((type) => {
      base(type)
        .select({
          view: 'Grid view',
          // BUG: Airtable throws error when max records value is equal or greater than 100
          // https://community.airtable.com/t/cannot-read-property-offset-of-undefined/34847
          maxRecords: 1000,
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function (record) {
              const plant = mapRecordToPlant(record.fields);
              res[type.toLowerCase()].push(plant);
              res.all.push(plant);
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              reject(res);
              return;
            }
            resolve(res);
          },
        );
    });
  });

  const a = { ...result };

  return {
    props: { plants: { ...result } },
  };
}
