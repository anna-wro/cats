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
  danger?: number;
  symptoms?: string[];
  note?: string;
  source?: string[];
};

type PlantFicheProps = Readonly<{
  plant: PlantType;
}>;

export default function Plant({ plant }: PlantFicheProps) {
  const thumbnail = useThumbnail(plant.thumbnailID);
  const url = thumbnail ? getPhotoUrl(thumbnail) : null;

  return (
    <div className="flex h-32 w-100 max-w-xs shadow rounded-lg">
      <div className="w-1/2 overflow-hidden rounded-l-lg bg-gray-light ">
        <img
          className="h-full w-full object-cover object-center"
          src={url?.thumbnail}
        />
      </div>
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
