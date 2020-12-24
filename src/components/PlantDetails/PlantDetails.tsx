import PlantSpecs from 'components/PlantDetails/PlantSpecs';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import CloseButton from './CloseButton';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantDetails({ plant }: PlantDetailsType) {
  return (
    <div className="bg-white fixed top-0 left-0 w-full h-screen z-10 px-20 ">
      <div className="flex divide-x divide-gray-light">
        <div className="w-1/3 lg:w-1/4 py-10 px-8 ">
          <PlantSpecs plant={plant} />
        </div>
        <div className="flex-grow py-10 px-8">
          plant gallery
          <CloseButton />
        </div>
      </div>
    </div>
  );
}
