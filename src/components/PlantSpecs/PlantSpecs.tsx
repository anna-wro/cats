import type { PlantType } from 'components/PlantFiche/PlantFiche';
import SafetyBadge from 'components/SafetyBadge/SafetyBadge';
import WhatNow from './WhatNow';
import VerifyInfo from './VerifyInfo';
import { makeStartCase } from 'utils/text';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantSpecs({ plant }: PlantDetailsType) {
  const accentColor =
    plant.danger === 0 ? 'blue' : plant.danger === 3 ? 'red' : 'orange';

  return (
    <>
      <div className="text-2xl font-semibold mb-6">
        {makeStartCase(plant.name.pl[0])}
      </div>
      {plant.danger !== 0 && <WhatNow />}
      <div className="mb-6">
        <div className="text-lg font-semibold mb-2">Zagrożenie</div>
        <div className="text-xs mb-2">{plant.danger}</div>
        {plant.note && (
          <div className="text-xs">{makeStartCase(plant.note)}</div>
        )}
      </div>
      {plant.symptoms && (
        <div className="mb-6">
          <div className="text-lg font-semibold mb-2">Objawy</div>
          <div className="text-xs">{makeStartCase(plant.symptoms)}</div>
        </div>
      )}
      <VerifyInfo source={plant.source} />
    </>
  );
}
