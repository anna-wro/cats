import Image from 'next/image';
import { copy } from 'consts/copy';

export default function WhatNow() {
  const [firstPart, secondPart] = copy.whatNowDesc.split('[html]');

  return (
    <div className="bg-red bg-opacity-20 rounded-2xl p-4 flex items-center mb-8">
      <div className="bg-white flex items-center justify-center rounded-full h-12 w-12 mr-4 flex-shrink-0">
        <Image width={40} height={40} src="/pulse.svg" alt="" />
      </div>
      <div>
        <div className="text-sm font-light">{copy.whatNowHeadline}</div>
        <div className="text-sm font-light">
          {firstPart}
          <span className="font-bold underline">{secondPart}</span>
        </div>
      </div>
    </div>
  );
}
