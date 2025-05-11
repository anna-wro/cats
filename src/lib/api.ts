import toxicData from '../data/toxic.json';
import safeData from '../data/safe.json';

type Record = {
  name: {
    pl: string[];
    en: string[];
    lat: string;
  };
  slug: string;
  imageID: string[];
  danger: number;
  source: string[];
  ID: string;
  symptoms: string | null;
  note: string | null;
};

type Plants = Record[];
type AllPlants = { toxic: Plants; safe: Plants };

export async function getAllPlants(): Promise<AllPlants> {
  try {
    return {
      toxic: toxicData.plants,
      safe: safeData.plants,
    };
  } catch (e) {
    console.error('API Error getAllPlants', e);
    return {
      toxic: [],
      safe: [],
    };
  }
}
