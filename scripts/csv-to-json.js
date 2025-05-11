import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

// Read and parse CSV files
const toxicCsv = fs.readFileSync(
  path.join(__dirname, '../data/toxic.csv'),
  'utf-8',
);
const safeCsv = fs.readFileSync(
  path.join(__dirname, '../data/safe.csv'),
  'utf-8',
);

// Parse CSV to objects
const toxicPlants = parse(toxicCsv, {
  columns: true,
  skip_empty_lines: true,
});

const safePlants = parse(safeCsv, {
  columns: true,
  skip_empty_lines: true,
});

// Transform the data to match Record type
function transformPlant(plant) {
  return {
    name: {
      pl: plant['name.pl']?.split(',').map(v => v.trim()) || [],
      en: plant['name.en']?.split(',').map(v => v.trim()) || [],
      lat: plant['name.lat'] || null,
    },
    slug: plant.slug || null,
    imageID: plant.imageID?.split(',').map(v => v.trim()) || [],
    danger: Number(plant.danger || -1),
    source: plant.source?.split(',').map(v => v.trim()) || [],
    ID: plant.ID || null,
    symptoms: plant.symptoms || null,
    note: plant.note || null,
  };
}

const toxicData = {
  plants: toxicPlants.map(transformPlant),
};

const safeData = {
  plants: safePlants.map(transformPlant),
};

fs.writeFileSync(
  path.join(__dirname, '../src/data/toxic.json'),
  JSON.stringify(toxicData, null, 2),
);

fs.writeFileSync(
  path.join(__dirname, '../src/data/safe.json'),
  JSON.stringify(safeData, null, 2),
);
