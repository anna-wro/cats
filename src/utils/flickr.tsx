import base58 from 'base58';
import type { PlantPhotoInfoType } from 'utils/usePhoto';

// https://www.flickr.com/services/api/misc.urls.html
const SIZE_TO_SUFFIX = {
  xxs: '_s', // cropped square 75px
  xs: '_t', // longest edge 100px
  s: '_m', // 240px
  m: '', // 500px
  l: '_c', // 800px
  xl: '_b', // 1024px
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

type LicenseType = Readonly<{ name: string; link: string }>;

// https://www.flickr.com/services/api/flickr.photos.licenses.getInfo.html
export const CC_LICENSES = ['1', '2', '3', '4', '5', '6', '9'];

export function getLicense(license: string): LicenseType {
  const baseUrl = 'https://creativecommons.org/';

  switch (license) {
    case '1':
      return {
        name: 'CC BY-NC-SA 2.0',
        link: `${baseUrl}/licenses/by-nc-sa/2.0/`,
      };
    case '2':
      return { name: 'CC BY-NC 2.0', link: `${baseUrl}/licenses/by-nc/2.0/` };
    case '3':
      return {
        name: 'CC BY-NC-ND 2.0',
        link: `${baseUrl}/licenses/by-nc-nd/2.0/`,
      };
    case '4':
      return { name: 'CC BY 2.0', link: `${baseUrl}/licenses/by/2.0/` };
    case '5':
      return { name: 'CC BY-SA 2.0', link: `${baseUrl}/licenses/by-sa/2.0/` };
    case '6':
      return { name: 'CC BY-ND 2.0', link: `${baseUrl}/licenses/by-nd/2.0/` };
    case '9':
      return { name: 'CC0 1.0', link: `${baseUrl}/publicdomain/zero/1.0/` };
  }
}

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
