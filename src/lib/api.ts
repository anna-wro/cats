import Airtable from 'airtable';

type Record = {
  name: {
    pl: string[];
    en: string[];
    lat: string;
  };
  slug: string;
  imageID: number;
  danger: number;
  source: string[];
  ID: string;
  symptoms: string;
  note: string;
};

function mapRecordToPlant(record): Record {
  return {
    name: {
      pl: record['name.pl']?.split(',').map((value) => value.trim()),
      en: record['name.en']?.split(',').map((value) => value.trim()),
      lat: record['name.lat'] ?? null,
    },
    slug: record.slug ?? null,
    imageID: record.imageID?.split(',').map((value) => value.trim()),
    danger: Number(record.danger ?? -1),
    source: record.source?.split(',').map((value) => value.trim()),
    ID: record.ID ?? null,
    symptoms: record.symptoms ?? null,
    note: record.note ?? null,
  };
}

type Plants = Record[];

async function getPlantsByType(type: string): Promise<Plants> {
  return new Promise((resolve, reject) => {
    const base = Airtable.base('app0awhBu3GphBQkq');
    const res = [];
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
            if (record.get('ID')) {
              const plant = mapRecordToPlant(record.fields);
              res.push(plant);
            }
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
}

type AllPlants = { toxic: Plants; safe: Plants };

export async function getAllPlants(): Promise<AllPlants> {
  try {
    const [Toxic, Safe] = await Promise.all([
      getPlantsByType('Toxic'),
      getPlantsByType('Safe'),
    ]);

    return {
      toxic: Toxic,
      safe: Safe,
    };
  } catch (e) {
    console.error('API Error getAllPlants', e);
  }
}
