import Link from 'next/link';
import useThumbnail from './useThumbnail';
import { getPhotoUrl } from 'utils/flickr';
import SafetyBadge from './SafetyBadge';
import ImageContainer from 'components/Image/ImageContainer';

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

export default function Plant({ plant }: PlantFicheProps) {
  const thumbnail = useThumbnail(plant.thumbnailID);
  const url = thumbnail ? getPhotoUrl(thumbnail) : null;

  return (
    <Link href={plant.slug}>
      <div className="flex h-32 w-100 max-w-xs shadow rounded-lg cursor-pointer">
        <div className="w-1/2 rounded-l-lg overflow-hidden bg-gray-light bg-opacity-30">
          {url && (
            <ImageContainer
              src={url.bigger}
              thumbnail={url.thumbnail}
              height={128}
              width={150}
              alt={plant.name.lat}
            />
          )}
        </div>
        <div className="w-1/2 rounded-r-lg p-5">
          <div className="flex flex-col items-center justify-center">
            <SafetyBadge danger={plant.danger} />
            <div className="text-dark text-sm text-center leading-4 pt-2">
              {plant.name.pl[0]}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
