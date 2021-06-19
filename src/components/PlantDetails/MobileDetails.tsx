import FocusTrap from 'focus-trap-react';
import type { PlantDetailsType } from './PlantDetailsFacade';
import SafetyScore from 'components/SafetyScore/SafetyScore';
import OtherNames from 'components/PlantSpecs/OtherNames';
import MobileGallery from 'components/PlantGallery/MobileGallery';
import { makeStartCase } from 'utils/text';
import CloseButton from 'components/PlantDetails/CloseButton';
import copy from 'consts/copy';

// TODO: WhatNow section
// TODO: Tooltip with detailed note

export default function MobileDetails({ plant }: PlantDetailsType) {
  return (
    <FocusTrap>
      <div className="flex flex-col h-full bg-white overflow-y-scroll md:hidden">
        <CloseButton small />
        <div className="px-4 pt-8">
          <div className="text-2xl font-semibold mb-2">
            {makeStartCase(plant.name.pl[0])}
          </div>
          <div className="text-sm mb-4">{makeStartCase(plant.name.lat)}</div>
          <div className="mb-4">
            <div className="text-lg font-semibold mb-2">
              {copy.dangerHeadline}
            </div>
            <SafetyScore danger={plant.danger} />
          </div>
          {/* <div className="mb-8 text-right">Icons</div> */}
        </div>
        <MobileGallery plant={plant} />
        <div className="px-4 pb-8">
          {plant.symptoms && (
            <div className="mb-6" id="symptoms">
              <div className="text-lg font-semibold mb-2">
                {copy.symptomsHeadline}
              </div>
              <div className="text-xs leading-5">
                {makeStartCase(plant.symptoms)}
              </div>
            </div>
          )}
          {plant.source && (
            <div className="mb-6">
              <div className="text-lg font-semibold mb-2">
                {copy.sourcesHeadline}
              </div>
              <ul className="list-decimal pl-4 mt-4 space-y-1.5">
                {plant.source.map(source => (
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
            <div className="text-lg font-semibold mb-2">
              {copy.otherNamesHeadline}
            </div>
            <OtherNames names={plant.name} />
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}
