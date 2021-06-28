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
    <main className="flex flex-col h-full">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-2">
          {makeStartCase(plant.name.pl[0])}
        </h1>
        <div className="text-sm mb-6">{makeStartCase(plant.name.lat)}</div>
        {/* TODO: WhatNow section */}
        {/* {plant.danger !== 0 && <WhatNow />} */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{copy.dangerHeadline}</h3>
          <SafetyScore danger={plant.danger} />
          {plant.note && (
            <h3 className="text-xs leading-5 mt-3">
              {makeStartCase(plant.note)}
            </h3>
          )}
        </div>
        {plant.symptoms && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              {copy.symptomsHeadline}
            </h3>
            <div className="text-xs leading-5">
              {makeStartCase(plant.symptoms)}
            </div>
          </div>
        )}
        {plant.source && <VerifyInfo sources={plant.source} />}
      </div>
      <OtherNames names={plant.name} />
    </main>
  );
}
