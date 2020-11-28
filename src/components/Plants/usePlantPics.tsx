import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL =
  'https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1';

  // TODO: put it somewhere safe
const API_KEY = 'abc';

export default function usePlantPics(name: string) {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_URL}&api_key=${API_KEY}&sort=relevance&text=${name}&per_page=12`,
      )
      .then((response) => {
        setPhotos(response.data.photos.photo);
      });
  }, []);

  return photos;
}
