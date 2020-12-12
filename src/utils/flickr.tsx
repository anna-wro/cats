import base58 from 'base58';
import type { PlantPhotoInfoType } from 'components/useThumbnail';

type PlantUrlType = {
  thumbnail: string;
  full: string;
};

export function getPhotosUrls(photos: PlantPhotoInfoType[]): PlantUrlType[] {
  return photos.map((photo) => getPhotoUrl(photo));
}

export function getPhotoUrl(photo: PlantPhotoInfoType): PlantUrlType {
  const { farm, server, id, secret } = photo;

  const thumbnail = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  const encodedId = base58.int_to_base58(id);
  const full = `https://flic.kr/p/${encodedId}`;

  return { thumbnail, full };
}
