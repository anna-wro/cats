import { useEffect, useState } from 'react';
import { setMultipleParams } from 'utils/url';

export type PlantPhotoInfoType = Readonly<{
  comments: Object;
  dates: Object;
  dateuploaded: string;
  description: Object;
  editability: Object;
  farm: number;
  geoperms: Object;
  id: string;
  isfavorite: boolean;
  license: string;
  location: Object;
  media: string;
  notes: Object;
  originalformat: string;
  originalsecret: string;
  owner: Object;
  people: Object;
  publiceditability: Object;
  rotation: boolean;
  safety_level: string;
  secret: string;
  server: string;
  tags: Object;
  title: Object;
  urls: Object;
  usage: Object;
  views: string;
  visibility: Object;
}>;

const API_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = process.env.NEXT_PUBLIC_FLICKR_API_KEY;

const SETTINGS = {
  method: 'flickr.photos.getInfo',
  format: 'json',
  nojsoncallback: 1,
  api_key: API_KEY,
};

// TODO: check if received license is ok

export default function useThumbnail(ID: string): PlantPhotoInfoType {
  let [thumbnail, setThumbnail] = useState();
  const url = setMultipleParams(
    { ...SETTINGS, photo_id: ID },
    API_URL,
  );

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setThumbnail(data.photo));
    } catch {}
  }, []);

  return thumbnail;
}
