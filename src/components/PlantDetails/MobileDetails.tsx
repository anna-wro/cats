import type { PlantDetailsType } from './PlantDetailsFacade';
import MobileMenuIcon from './MobileMenuIcon';
import SafetyScore from 'components/SafetyScore/SafetyScore';
import OtherNames from 'components/PlantSpecs/OtherNames';
import MobileGallery from 'components/PlantGallery/MobileGallery';
import { makeStartCase } from 'utils/text';
import CloseButton from 'components/PlantDetails/CloseButton';
import { copy } from 'consts/copy';

// TODO: Logo
// TODO: Tooltip with detailed note

export default function MobileDetails({ plant }: PlantDetailsType) {
  return (
    <div className="flex flex-col h-full bg-white overflow-y-scroll smooth-scroll md:hidden">
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
        <div className="mb-8 text-right space-x-2">
          {plant.symptoms && (
            <>
              <MobileMenuIcon
                href="#symptoms"
                src="/info.svg"
                alt={copy.symptomsIconAlt}
              />
              {/* <MobileMenuIcon
            href="#what-now"
            src="/pulse.svg"
            alt={copy.whatNowIconAlt}
          /> */}
              <MobileMenuIcon
                href="#sources"
                src="/check-circle.svg"
                alt={copy.sourcesIconAlt}
              />
            </>
          )}
          {/* TODO: Enable when WhatNowSection is ready */}
        </div>
      </div>
      <MobileGallery plant={plant} />
      <main className="px-4 pb-8">
        {plant.symptoms && (
          <div className="mb-6" id="symptoms">
            <h3 className="text-lg font-semibold mb-2">
              {copy.symptomsHeadline}
            </h3>
            <div className="text-xs leading-5">
              {makeStartCase(plant.symptoms)}
            </div>
          </div>
        )}
        {/* {plant.danger !== 0 && (
          <div className="mb-6" id="what-now">
            <div className="text-lg font-semibold mb-2">
              {copy.whatNowHeadline}
            </div>
            <div className="text-xs"> {copy.whatNowDesc}</div>
          </div>
        )} */}
        {plant.source && (
          <div className="mb-6" id="sources">
            <h3 className="text-lg font-semibold mb-2">
              {copy.sourcesHeadline}
            </h3>
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
          <h3 className="text-lg font-semibold mb-2">
            {copy.otherNamesHeadline}
          </h3>
          <OtherNames names={plant.name} />
        </div>
      </main>
    </div>
  );
}
