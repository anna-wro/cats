import base58 from 'base58';
import type { PlantPhotoInfoType } from 'utils/usePhoto';

// https://www.flickr.com/services/api/misc.urls.html
const SIZE_TO_SUFFIX = {
  xxs: '_s', // cropped square 75px
  xs: '_t', // longest edge 100px
  s: '_m', // 240px
  m: '', // 500px
  l: '_c', // 800px
  xl: '_b', // 1024
};

const AVAILABLE_SIZES = Object.keys(SIZE_TO_SUFFIX);

type PhotoLinksType = Readonly<{
  xxs?: string;
  xs?: string;
  s?: string;
  m?: string;
  l?: string;
  xl?: string;
  source: string;
}>;

export function getPhotoLinks(photo: PlantPhotoInfoType): PhotoLinksType {
  const { farm, server, id, secret } = photo;

  const sizes = AVAILABLE_SIZES.reduce(
    (obj, size) => ({
      ...obj,
      [size]: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}${SIZE_TO_SUFFIX[size]}.jpg`,
    }),
    {},
  );

  const encodedId = base58.int_to_base58(id);
  const source = `https://flic.kr/p/${encodedId}`;

  return { ...sizes, source };
}
