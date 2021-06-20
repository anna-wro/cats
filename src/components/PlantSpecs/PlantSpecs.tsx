import VerifyInfo from './VerifyInfo';
import OtherNames from './OtherNames';
import { makeStartCase } from 'utils/text';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import SafetyScore from 'components/SafetyScore/SafetyScore';
// import WhatNow from './WhatNow';
import { copy } from 'consts/copy';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantSpecs({ plant }: PlantDetailsType) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <div className="text-2xl font-semibold mb-2">
          {makeStartCase(plant.name.pl[0])}
        </div>
        <div className="text-sm mb-6">{makeStartCase(plant.name.lat)}</div>
        {/* TODO: WhatNow section */}
        {/* {plant.danger !== 0 && <WhatNow />} */}
        <div className="mb-6">
          <div className="text-lg font-semibold mb-2">
            {copy.dangerHeadline}
          </div>
          <SafetyScore danger={plant.danger} />
          {plant.note && (
            <div className="text-xs leading-5 mt-3">
              {makeStartCase(plant.note)}
            </div>
          )}
        </div>
        {plant.symptoms && (
          <div className="mb-6">
            <div className="text-lg font-semibold mb-2">
              {copy.symptomsHeadline}
            </div>
            <div className="text-xs leading-5">
              {makeStartCase(plant.symptoms)}
            </div>
          </div>
        )}
        {plant.source && <VerifyInfo sources={plant.source} />}
      </div>
      <OtherNames names={plant.name} />
    </div>
  );
}
