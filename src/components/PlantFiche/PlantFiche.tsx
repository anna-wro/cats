import Link from 'next/link';
import usePhoto from 'utils/usePhoto';
import { getPhotoUrl } from 'utils/flickr';
import SafetyBadge from 'components/SafetyScore/SafetyBadge';
import ImageContainer from 'components/Image/ImageContainer';
import { makeStartCase, highlightText } from 'utils/text';

export type PlantType = Readonly<{
  name: {
    pl: string[];
    en: string[];
    lat: string;
  };
  slug: string;
  imageID: string;
  queryImage?: string;
  danger: number;
  symptoms?: string;
  note?: string;
  source?: string[];
}>;

type PlantFicheProps = Readonly<{
  plant: PlantType;
  query?: string;
}>;

export default function Plant({ plant, query }: PlantFicheProps) {
  const photo = usePhoto(plant.imageID);
  const url = photo ? getPhotoUrl(photo) : null;
  const mainName = makeStartCase(plant.name.pl[0]);

  return (
    <Link href={plant.slug}>
      <div className="flex h-32 w-100 max-w-xs shadow rounded-lg cursor-pointer">
        <div className="w-1/2 rounded-l-lg overflow-hidden bg-gray-light bg-opacity-30">
          {url && (
            <ImageContainer
              src={url.bigger}
              thumbnail={url.thumbnail}
              alt={plant.name.lat}
            />
          )}
        </div>
        <div className="w-1/2 rounded-r-lg p-5">
          <div className="flex flex-col items-center justify-center">
            <SafetyBadge danger={plant.danger} />
            <div className="text-dark text-sm text-center leading-4 pt-2">
              {query ? highlightText(mainName, query) : mainName}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
