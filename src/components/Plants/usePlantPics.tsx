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

const settings = {
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
  const url = setMultipleParams(settings, API_URL);

  // TODO: use fetch instead?
  useEffect(() => {
    axios.get(`${url}&text=${name}`).then((response) => {
      setPhotos(response.data.photos.photo);
    });
  }, []);

  return photos;
}
