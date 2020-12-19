import { getPhotoUrl } from 'utils/flickr';
import Link from 'next/link';
import useThumbnail from 'components/PlantFiche/useThumbnail';
import SafetyBadge from 'components/PlantFiche/SafetyBadge';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantDetails({ plant }: PlantDetailsType) {
  const thumbnail = useThumbnail(plant.thumbnailID);
  const url = thumbnail ? getPhotoUrl(thumbnail) : null;

  return (
    <div className="flex divide-x divide-gray-light relative">
      <div className="w-1/4 p-10 min-h-screen ">text</div>
      <div className="flex-grow p-10 min-h-screen">
        pics
        <Link href="/">
          <div className="flex items-center content-center bg-gray-light cursor-pointer absolute top-10 right-10 px-3 py-2 rounded-lg">
            <img className="inline mr-1" src="/close.svg" /> <div className="text-sm text-dark">Zamknij</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
