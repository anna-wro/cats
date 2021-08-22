import { useEffect, useState } from 'react';
import { setMultipleParams } from 'utils/url';
import { CC_LICENSES, getPhotoLinks } from 'utils/flickr';
import type { PhotoLinksType } from 'utils/flickr';

export type OwnerType = Readonly<{
  username: string;
  realname: string;
  path_alias: string;
  nsid: string;
}>;

export type PlantPhotoInfoType = Readonly<{
  comments: Record<string, unknown>;
  dates: Record<string, unknown>;
  dateuploaded: string;
  description: Record<string, unknown>;
  editability: Record<string, unknown>;
  farm: number;
  geoperms: Record<string, unknown>;
  id: string;
  isfavorite: boolean;
  license: string;
  location: Record<string, unknown>;
  media: string;
  notes: Record<string, unknown>;
  originalformat: string;
  originalsecret: string;
  owner: OwnerType;
  people: Record<string, unknown>;
  publiceditability: Record<string, unknown>;
  rotation: boolean;
  safety_level: string;
  secret: string;
  server: string;
  tags: Record<string, unknown>;
  title: Record<string, unknown>;
  urls: Record<string, unknown>;
  usage: Record<string, unknown>;
  views: string;
  visibility: Record<string, unknown>;
  links: PhotoLinksType;
}>;

const API_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = process.env.NEXT_PUBLIC_FLICKR_API_KEY;

const SETTINGS = {
  method: 'flickr.photos.getInfo',
  format: 'json',
  nojsoncallback: 1,
  api_key: API_KEY,
};

export default function usePhoto(ID: string): PlantPhotoInfoType {
  const [photo, setPhoto] = useState();
  const [mounted, setMounted] = useState(true);
  const url = setMultipleParams({ ...SETTINGS, photo_id: ID }, API_URL);

  useEffect(() => {
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (mounted && CC_LICENSES.includes(data?.photo?.license)) {
            setPhoto({ ...data.photo, links: getPhotoLinks(data.photo) });
          }
        });
    } catch {}

    return () => setMounted(false);
  }, [ID, url, mounted]);

  return photo;
}
