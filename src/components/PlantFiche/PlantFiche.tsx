import useThumbnail from './useThumbnail';
import { getPhotoUrl } from 'utils/flickr';
import SafetyBadge from './SafetyBadge';

export type PlantType = {
  name: {
    pl: string[];
    en: string[];
    lat: string;
  };
  slug: string;
  thumbnailID: string;
  queryImage?: string;
  isSafe: boolean;
  severity?: number,
  symptoms?: number,
  note?: string;
};

type PlantFicheProps = Readonly<{
  plant: PlantType;
}>;

export default function Plant({ plant }: PlantFicheProps) {
  const thumbnail = useThumbnail(plant.thumbnailID);
  const url = thumbnail ? getPhotoUrl(thumbnail) : null;

  return (
    <div className="flex h-32 w-80 shadow-lg rounded-lg">
      <div
        className="w-1/2 rounded-l-lg bg-gray-light bg-cover bg-center"
        style={{ backgroundImage: `url(${url?.thumbnail})` }}
      ></div>
      <div className="w-1/2 rounded-r-lg p-5">
        <div className="flex flex-col items-center justify-center">
          <SafetyBadge isSafe={plant.isSafe} />
          <div className="text-dark text-sm text-center leading-4 pt-2">
            {plant.name.pl[0]}
          </div>
        </div>
      </div>
    </div>
  );
}
