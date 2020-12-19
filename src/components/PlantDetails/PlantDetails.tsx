import { getPhotoUrl } from 'utils/flickr';
import useThumbnail from 'components/PlantFiche/useThumbnail';
import SafetyBadge from 'components/PlantFiche/SafetyBadge';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantDetails({ plant }: PlantDetailsType) {
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
