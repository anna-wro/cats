import Airtable from 'airtable';

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

export async function getAllPlants() {
  const base = Airtable.base('app0awhBu3GphBQkq');

  const result: {
    safe: Array<Object>;
    toxic: Array<Object>;
  } = await new Promise((resolve, reject) => {
    const res = {
      safe: [],
      toxic: [],
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

  return result;
}
