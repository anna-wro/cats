import Airtable from 'airtable';

function mapRecordToPlant(record) {
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

async function getPlantsByType(type) {
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

export async function getAllPlants() {
  try {
    const [Toxic, Safe] = await Promise.all([
      getPlantsByType('Safe'),
      getPlantsByType('Toxic'),
    ]);

    return {
      toxic: Toxic,
      safe: Safe,
    };
  } catch (e) {
    console.error('API Error getAllPlants', e);
  }
}
