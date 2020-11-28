// TODO ADD TYPE
export async function getPhotosUrls(photos) {
  return photos.map((photo) => {
    const { farm, server, id, secret, title } = photo;
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    return url;
  });
}
