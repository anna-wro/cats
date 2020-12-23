import Link from 'next/link';
import useThumbnail from 'components/PlantFiche/useThumbnail';
import { getPhotoUrl } from 'utils/flickr';
import SafetyLabel from 'components/SafetyBadge/SafetyLabel';
import SafetyBadge from 'components/SafetyBadge/SafetyBadge';
import ImageContainer from 'components/Image/ImageContainer';
import { makeStartCase } from 'utils/text';

export type PlantType = Readonly<{
  name: {
    pl: string[];
    en: string[];
    lat: string;
  };
  slug: string;
  thumbnailID: string;
  queryImage?: string;
  danger: number;
  symptoms?: string;
  note?: string;
  source?: string[];
}>;

type PlantFicheProps = Readonly<{
  plant: PlantType;
}>;

export default function PlantCard({ plant }: PlantFicheProps) {
  const thumbnail = useThumbnail(plant.thumbnailID);
  const url = thumbnail ? getPhotoUrl(thumbnail) : null;

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
            {makeStartCase(plant.name.pl[0])}
          </div>
          <div className="text-gray text-xs font-light">
            {makeStartCase(plant.name.lat)}
          </div>
          <SafetyLabel danger={plant.danger} />
        </div>
      </div>
    </Link>
  );
}
