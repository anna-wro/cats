import PlantSpecs from 'components/PlantSpecs/PlantSpecs';
import PlantGallery from 'components/PlantGallery/PlantGallery';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import CloseButton from './CloseButton';
import type { PlantDetailsType } from './PlantDetailsFacade';

export default function DesktopDetails({ plant }: PlantDetailsType) {
  return (
    <div className="flex h-full divide-x divide-gray-light sm:hidden">
      <div className="w-full max-w-sm py-10 px-8">
        <PlantSpecs plant={plant} />
      </div>
      <div className="flex-grow">
        <PlantGallery plant={plant} />
        <CloseButton />
      </div>
    </div>
  );
}
