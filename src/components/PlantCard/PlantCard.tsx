import Link from 'next/link';
import { getPlantAriaLabel } from 'consts/copy';
import usePhoto from 'utils/usePhoto';
import SafetyLabel from 'components/SafetyScore/SafetyLabel';
import SafetyBadge from 'components/SafetyScore/SafetyBadge';
import ImageContainer from 'components/Image/ImageContainer';
import { makeStartCase, highlightText } from 'utils/text';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantCardProps = Readonly<{
  plant: PlantType;
  query: string;
}>;

export default function PlantCard({ plant, query }: PlantCardProps) {
  const photo = usePhoto(plant.imageID[0]);
  const mainName = makeStartCase(plant.name.pl[0]);
  const latinName = makeStartCase(plant.name.lat);
  const ariaLabel = getPlantAriaLabel(plant);

  return (
    <Link href={plant.slug}>
      <a
        className="w-100 max-w-xs shadow rounded-lg cursor-pointer outline-rounded outline-bold"
        href={plant.slug}
        aria-label={ariaLabel}
      >
        <div className="h-48 rounded-t-lg overflow-hidden bg-gray-light bg-opacity-30">
          {photo && (
            <ImageContainer
              src={photo.links.m}
              fallback={photo.links.s}
              thumbnail={photo.links.xs}
              alt={plant.name.lat}
            />
          )}
        </div>
        <div className="rounded-b-lg p-4 relative">
          <div className="absolute -top-6">
            <SafetyBadge withBorder danger={plant.danger} />
          </div>
          <h2 className="text-dark text-sm font-medium pt-4">
            {query ? highlightText(mainName, query) : mainName}
          </h2>
          <div className="text-gray text-xs font-light">
            {query ? highlightText(latinName, query) : latinName}
          </div>
          <SafetyLabel danger={plant.danger} />
        </div>
      </a>
    </Link>
  );
}
