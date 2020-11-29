import { useEffect, useState } from 'react';
import { setMultipleParams } from 'utils/url';

export type PlantPhotosType = {
  farm: number;
  id: string;
  isfamily: boolean;
  isfriend: boolean;
  ispublic: boolean;
  owner: string;
  secret: string;
  server: string;
  title: string;
};

const API_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = process.env.NEXT_PUBLIC_FLICKR_API_KEY;

const BASE_TAGS = [
  'plant',
  'plants',
  'flower',
  'floral',
  'botanics',
  'nature',
  'botany',
  'flora',
];

const SETTINGS = {
  method: 'flickr.photos.search',
  format: 'json',
  nojsoncallback: 1,
  api_key: API_KEY,
  sort: 'relevance',
  license: '1,2,3,4,5,9,10',
  content_type: '1',
  per_page: 12,
};

export default function usePlantPics(name: string): PlantPhotosType[] {
  let [photos, setPhotos] = useState([]);
  // TODO: If release planned, check all plants and add custom query if needed
  const finalTags = [...BASE_TAGS, name];
  const finalParams = { ...SETTINGS, text: name, tags: finalTags.toString() };
  const url = setMultipleParams(finalParams, API_URL);

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setPhotos(data.photos.photo));
    } catch {}
  }, []);

  return photos;
}
