import type { PlantDetailsType } from './PlantDetailsFacade';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import SafetyScore from 'components/SafetyScore/SafetyScore';
import OtherNames from 'components/PlantSpecs/OtherNames';
import MobileGallery from 'components/PlantGallery/MobileGallery';
import { makeStartCase } from 'utils/text';

// TODO: WhatNow section
// TODO: Tooltip with detailed note
// NOTE: Stick other names to bottom?
// TODO: Close button

export default function MobileDetails({ plant }: PlantDetailsType) {
  return (
    <div className="flex flex-col h-full bg-white px-4 py-8 overflow-scroll">
      <div className="text-2xl font-semibold mb-2">
        {makeStartCase(plant.name.pl[0])}
      </div>
      <div className="text-sm mb-4">{makeStartCase(plant.name.lat)}</div>
      <div className="mb-4">
        <div className="text-lg font-semibold mb-2">Zagrożenie</div>
        <SafetyScore danger={plant.danger} />
      </div>
      <div className="mb-8 text-right">Icons</div>
      <div className="mb-4">
        <MobileGallery plant={plant} />
      </div>
      {plant.symptoms && (
        <div className="mb-6">
          <div className="text-lg font-semibold mb-2">Objawy</div>
          <div className="text-xs">{makeStartCase(plant.symptoms)}</div>
        </div>
      )}
      {plant.source && (
        <div className="mb-6">
          <div className="text-lg font-semibold mb-2">
            Zweryfikuj informacje
          </div>
          <ul className="list-decimal pl-4 mt-4 space-y-1.5">
            {plant.source.map((source) => (
              <li className="text-xs break-all" key={source}>
                <a href={`https://${source}`} className="hover:underline">
                  {source}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mb-6">
        <div className="text-lg font-semibold mb-2">Inne nazwy</div>
        <OtherNames names={plant.name} />
      </div>
    </div>
  );
}
