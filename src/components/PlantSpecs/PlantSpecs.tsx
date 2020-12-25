import type { PlantType } from 'components/PlantFiche/PlantFiche';
import SafetyScore from 'components/SafetyScore/SafetyScore';
import WhatNow from './WhatNow';
import VerifyInfo from './VerifyInfo';
import OtherNames from './OtherNames';
import { makeStartCase } from 'utils/text';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantSpecs({ plant }: PlantDetailsType) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <div className="text-2xl font-semibold mb-2">
          {makeStartCase(plant.name.pl[0])}
        </div>
        <div className="text-sm mb-6">{makeStartCase(plant.name.lat)}</div>
        {plant.danger !== 0 && <WhatNow />}
        <div className="mb-6">
          <div className="text-lg font-semibold mb-2">Zagrożenie</div>
          <SafetyScore danger={plant.danger} />
          {plant.note && (
            <div className="text-xs mt-3">{makeStartCase(plant.note)}</div>
          )}
        </div>
        {plant.symptoms && (
          <div className="mb-6">
            <div className="text-lg font-semibold mb-2">Objawy</div>
            <div className="text-xs">{makeStartCase(plant.symptoms)}</div>
          </div>
        )}
        <VerifyInfo source={plant.source} />
      </div>
      <div className="mb-2">
        <OtherNames lang="pl" names={plant.name.pl} />
      </div>
      <OtherNames lang="en" names={plant.name.en} />
    </div>
  );
}
