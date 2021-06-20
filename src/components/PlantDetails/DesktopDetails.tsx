import PlantSpecs from 'components/PlantSpecs/PlantSpecs';
import PlantGallery from 'components/PlantGallery/PlantGallery';
import CloseButton from './CloseButton';
import type { PlantDetailsType } from './PlantDetailsFacade';

export default function DesktopDetails({ plant, onKeyDown }: PlantDetailsType) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="h-full divide-x divide-gray-light hidden md:flex"
      onKeyDown={onKeyDown}
    >
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
