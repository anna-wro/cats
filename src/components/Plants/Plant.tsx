import usePlantPics from './usePlantPics';
import { getPhotosUrls } from 'utils/flickr';

export type PlantType = {
  name: {
    pl: string[];
    en: string[];
    lat: string;
  };
  query?: string;
  isSafe: boolean;
};

type PlantProps = Readonly<{
  plant: PlantType;
}>;

const PHOTOS_TO_DISPLAY = 5;

export default function Plant({ plant }: PlantProps) {
  const photos = usePlantPics(plant.query ?? plant.name.lat);
  const urls = getPhotosUrls(photos.slice(0, PHOTOS_TO_DISPLAY));

  return (
    <div className="pb-3">
      {plant.name.pl[0]} {plant.isSafe ? '✅' : '🍄'}
      <div className="flex pt-2 pb-3">
        {urls.map((url) => (
          <img
            className="rounded-lg mr-2 shadow-md cursor-pointer"
            src={url.thumbnail}
            alt={plant.name.lat}
            key={url.full}
            onClick={() => window.open(url.full)}
          />
        ))}
      </div>
    </div>
  );
}
