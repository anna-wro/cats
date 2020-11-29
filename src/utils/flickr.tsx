import base58 from 'base58';

// TODO ADD TYPE
export function getPhotosUrls(photos) {
  return photos.map((photo) => {
    const { farm, server, id, secret } = photo;

    const thumbnail = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_q.jpg`;
    const encodedId = base58.int_to_base58(id);
    const full = `https://flic.kr/p/${encodedId}`;

    return { thumbnail, full };
  });
}
