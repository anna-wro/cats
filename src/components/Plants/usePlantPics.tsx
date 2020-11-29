import { useEffect, useState } from 'react';
import { setMultipleParams } from '../../utils/url';
import axios from 'axios';

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

const TAGS = [
  'plant',
  'plants',
  'flower',
  'floral',
  'green',
  'fern',
  'botanical',
  'botanics',
  'wildflowers',
  'orchids',
  'nature',
  'ethnobotany',
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
  // TODO: If release planned, add tags with EN names and values to exclude
  // (look at limonium, benjamin ficus)
  const finalTags = [...TAGS, name];
  const finalParams = { ...SETTINGS, text: name, tags: finalTags.toString() };
  const url = setMultipleParams(finalParams, API_URL);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPhotos(response.data.photos.photo);
    });
  }, []);

  return photos;
}
