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
      {plant.danger !== 0 && (
        <div className="bg-red bg-opacity-20 rounded-2xl p-4 flex items-center mb-8">
          <div className="bg-white flex items-center justify-center rounded-full h-12 w-12 mr-4 flex-shrink-0">
            <img className="w-10 h-10" src="/pulse.svg" />
          </div>
          <div>
            <div className="text-sm font-light">Twój kot to zjadł?</div>
            <div className="text-sm font-light">
              Dowiedz się,{' '}
              <span className="font-bold underline">co zrobić.</span>
            </div>
          </div>
        </div>
      )}
      <div className="mb-6">
        <div className="text-lg font-semibold mb-2">Zagrożenie</div>
        <div className="text-xs">{plant.danger}</div>
      </div>
      {plant.symptoms && (
        <div className="mb-6">
          <div className="text-lg font-semibold mb-2">Objawy</div>
          <div className="text-xs">{makeStartCase(plant.symptoms)}</div>
        </div>
      )}
      <div className="border border-gray-light rounded-2xl p-4 flex items-center justify-between mb-8 cursor-pointer">
        <div className="flex items-center justify-center">
          <div className="bg-dark bg-opacity-60 flex items-center justify-center rounded-full h-12 w-12 mr-4 flex-shrink-0">
            <img className="w-6 h-6" src="/check-circle.svg" />
          </div>
          <div className="text-sm font-light">Zweryfikuj informacje</div>
        </div>
        <div
          className="bg-gray bg-opacity-40 hover:bg-opacity-50 rounded-full 
        flex items-center justify-center  w-4 h-4 flex-shrink-0"
        >
          {' '}
          <img className="h-2" src="/chevron-right.svg" />
        </div>
      </div>
    </>
  );
}
