import type { PlantType } from 'components/PlantFiche/PlantFiche';
import SafetyBadge from 'components/SafetyBadge/SafetyBadge';
import { makeStartCase } from 'utils/text';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantSpecs({ plant }: PlantDetailsType) {
  const accentColor =
    plant.danger === 0 ? 'blue' : plant.danger === 3 ? 'red' : 'orange';

  return (
    <>
      <div className="text-dark text-2xl font-semibold mb-6">
        {makeStartCase(plant.name.pl[0])}
      </div>
      <div className="bg-red bg-opacity-20 rounded-2xl p-4 flex items-center">
        <div className="bg-white flex items-center justify-center rounded-full h-12 w-12 mr-4 flex-shrink-0">
          <img className="w-10 h-10" src="/pulse.svg" />
        </div>
        <div>
          <div className="text-sm font-light">Twój kot to zjadł?</div>
          <div className="text-sm font-light">
            Dowiedz się, <span className="font-bold underline">co zrobić.</span>
          </div>
        </div>
      </div>
    </>
  );
}
