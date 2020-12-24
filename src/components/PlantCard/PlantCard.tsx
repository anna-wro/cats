import Link from 'next/link';
import useThumbnail from 'components/PlantFiche/useThumbnail';
import { getPhotoUrl } from 'utils/flickr';
import SafetyLabel from 'components/SafetyBadge/SafetyLabel';
import SafetyBadge from 'components/SafetyBadge/SafetyBadge';
import ImageContainer from 'components/Image/ImageContainer';
import { makeStartCase, highlightText } from 'utils/text';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantCardProps = Readonly<{
  plant: PlantType;
  query: string;
}>;

export default function PlantCard({ plant, query }: PlantCardProps) {
  const thumbnail = useThumbnail(plant.thumbnailID);
  const url = thumbnail ? getPhotoUrl(thumbnail) : null;
  const mainName = makeStartCase(plant.name.pl[0]);
  const latinName = makeStartCase(plant.name.lat);

  return (
    <Link href={plant.slug}>
      <div className="w-100 max-w-xs shadow rounded-lg cursor-pointer">
        <div className="h-48 rounded-t-lg overflow-hidden bg-gray-light bg-opacity-30">
          {url && (
            <ImageContainer
              src={url.bigger}
              thumbnail={url.thumbnail}
              alt={plant.name.lat}
            />
          )}
        </div>
        <div className="rounded-b-lg p-4 relative">
          <div className="absolute -top-6">
            <SafetyBadge withBorder danger={plant.danger} />
          </div>
          <div className="text-dark text-sm font-medium pt-4">
            {query ? highlightText(mainName, query) : mainName}
          </div>
          <div className="text-gray text-xs font-light">
            {query ? highlightText(latinName, query) : latinName}
          </div>
          <SafetyLabel danger={plant.danger} />
        </div>
      </div>
    </Link>
  );
}