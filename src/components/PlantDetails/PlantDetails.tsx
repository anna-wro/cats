import PlantSpecs from 'components/PlantSpecs/PlantSpecs';
import PlantGallery from 'components/PlantGallery/PlantGallery';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import CloseButton from './CloseButton';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantDetails({ plant }: PlantDetailsType) {
  return (
    <div className="bg-white fixed top-0 left-0 w-full h-screen z-10">
      <div className="flex h-full divide-x divide-gray-light">
        <div className="w-1/3 lg:w-1/4 py-10 px-8 ">
          <PlantSpecs plant={plant} />
        </div>
        <div className="flex-grow py-10 px-8">
          <PlantGallery plant={plant} />
          <CloseButton />
        </div>
      </div>
    </div>
  );
}
