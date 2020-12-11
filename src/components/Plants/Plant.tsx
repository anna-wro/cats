import usePlantPics from './usePlantPics';
import Image from 'next/image';
import { getPhotosUrls } from 'utils/flickr';

export type PlantType = {
  name: {
    pl: string[];
    en: string[];
    lat: string;
  };
  slug: string;
  queryImage?: string;
  isSafe: boolean;
  note?: string;
};

type PlantProps = Readonly<{
  plant: PlantType;
}>;

const PHOTOS_TO_DISPLAY = 5;

export default function Plant({ plant }: PlantProps) {
  const photos = usePlantPics(plant.queryImage ?? plant.name.lat);
  const urls = getPhotosUrls(photos.slice(0, PHOTOS_TO_DISPLAY));

  return (
    <div className="pb-3">
      {plant.name.pl[0]}{' '}
      {plant.isSafe ? (
        <Image src="/smile.svg" width={30} height={30} />
      ) : (
        <Image src="/frown.svg" width={30} height={30} />
      )}
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
