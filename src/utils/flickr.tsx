import base58 from 'base58';
import type { PlantPhotosType } from 'components/Plants/usePlantPics';

type PlantUrlType = {
  thumbnail: string;
  full: string;
};

export function getPhotosUrls(photos: PlantPhotosType[]): PlantUrlType[] {
  return photos.map((photo) => {
    const { farm, server, id, secret } = photo;

    const thumbnail = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_q.jpg`;
    const encodedId = base58.int_to_base58(id);
    const full = `https://flic.kr/p/${encodedId}`;

    return { thumbnail, full };
  });
}
