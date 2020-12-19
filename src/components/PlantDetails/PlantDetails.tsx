import { getPhotoUrl } from 'utils/flickr';
import useThumbnail from 'components/PlantFiche/useThumbnail';
import SafetyBadge from 'components/PlantFiche/SafetyBadge';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantDetails({ plant }: PlantDetailsType) {
  const thumbnail = useThumbnail(plant.thumbnailID);
  const url = thumbnail ? getPhotoUrl(thumbnail) : null;

  return (
    <div className="flex divide-x divide-gray-light">
      <div className="w-1/4 p-10 min-h-screen ">text</div>
      <div className="flex-grow p-10 min-h-screen">pics</div>
    </div>
  );
}
