import Link from 'next/link';
import useThumbnail from 'components/PlantFiche/useThumbnail';
import { getPhotoUrl } from 'utils/flickr';
import SafetyLabel from 'components/SafetyBadge/SafetyLabel';
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
      <div
        className="flex flex-col w-100 max-w-xs shadow rounded-lg cursor-pointer"
        style={{ height: '300px' }} //FIXME: height
      >
        <div className="h-2/3 rounded-t-lg overflow-hidden bg-gray-light bg-opacity-30">
          {url && (
            <ImageContainer
              src={url.bigger}
              thumbnail={url.thumbnail}
              alt={plant.name.lat}
            />
          )}
        </div>
        <div className="h-1/3 rounded-b-lg p-4">
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
