import PlantSpecs from 'components/PlantDetails/PlantSpecs';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import CloseButton from './CloseButton';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantDetails({ plant }: PlantDetailsType) {
  return (
    <div className="flex divide-x divide-gray-light relative">
      <div className="w-1/4 p-10 min-h-screen ">
        <PlantSpecs plant={plant} />
      </div>
      <div className="flex-grow p-10 min-h-screen">
        plant gallery
        <CloseButton />
      </div>
    </div>
  );
}
