import usePlantPics from './Plants/usePlantPics';
import { getPhotosUrls } from 'utils/flickr';
import SafetyBadge from 'components/SafetyBadge';

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

type PlantFicheProps = Readonly<{
  plant: PlantType;
}>;

const PHOTOS_TO_DISPLAY = 1;

export default function Plant({ plant }: PlantFicheProps) {
  const photos = usePlantPics(plant.queryImage ?? plant.name.lat);
  const urls = getPhotosUrls(photos.slice(0, PHOTOS_TO_DISPLAY));

  return (
    <div className="flex h-32 w-80 shadow-lg rounded-lg">
      <div
        className="w-1/2 rounded-l-lg bg-gray-light bg-cover"
        style={{ backgroundImage: `url(${urls?.[0]?.thumbnail})` }}
      ></div>
      <div className="w-1/2 rounded-r-lg p-5">
        <div className="flex flex-col items-center justify-center">
          <SafetyBadge isSafe={plant.isSafe} />
          <div className="text-gray text-sm text-center leading-4 pt-2">
            {plant.name.pl[0]}
          </div>
        </div>
      </div>
    </div>
  );
}
