import type { PlantDetailsType } from './PlantDetailsFacade';
import CloseButton from './CloseButton';
import PlantSpecs from 'components/PlantSpecs/PlantSpecs';
import PlantGallery from 'components/PlantGallery/PlantGallery';

export default function DesktopDetails({ plant, onKeyDown }: PlantDetailsType) {
  return (
    // NOTE: closing the modal on click in handled in CloseButton
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
