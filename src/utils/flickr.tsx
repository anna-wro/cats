// TODO ADD TYPE
export function getPhotosUrls(photos) {
  return photos.map((photo) => {
    const { farm, server, id, secret } = photo;
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_q.jpg`;
    return url;
  });
}
