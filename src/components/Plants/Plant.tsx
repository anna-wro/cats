import usePlantPics from './usePlantPics';
import { getPhotosUrls } from '../../utils/flickr';

export type PlantType = {
  name: {
    pl: string[];
    en: string[];
    lat: string;
  };
  isSafe: boolean;
};

const PHOTOS_TO_DISPLAY = 5;

export default function Plant({ plant }: { plant: PlantType }) {
  const photos = usePlantPics(plant.name.lat);
  const urls = getPhotosUrls(photos.slice(0, PHOTOS_TO_DISPLAY));

  return (
    <div className="pb-3">
      {plant.name.pl[0]} {plant.isSafe ? '✅' : '🍄'}
      <div className="flex pt-2 pb-3">
        {urls.map((url, index) => (
          <img
            className="rounded-lg mr-2 shadow-md cursor-pointer"
            src={url.thumbnail}
            alt={plant.name.lat}
            key={index}
            onClick={() => (window.open(url.full))}
          />
        ))}
      </div>
    </div>
  );
}
