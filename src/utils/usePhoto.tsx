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
  owner: { username: string; realname: string; path_alias: string };
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

// https://www.flickr.com/services/api/flickr.photos.licenses.getInfo.html
const CC_LICENSES = ['1', '2', '3', '4', '5', '6', '9'];

export default function usePhoto(ID: string): PlantPhotoInfoType {
  let [photo, setPhoto] = useState();
  const url = setMultipleParams({ ...SETTINGS, photo_id: ID }, API_URL);

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (CC_LICENSES.includes(data.photo.license)) {
            setPhoto(data.photo);
          }
        });
    } catch {}
  }, [ID]);

  return photo;
}
