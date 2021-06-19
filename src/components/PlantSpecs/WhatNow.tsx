import Image from 'next/image';

export default function WhatNow() {
  return (
    <div className="bg-red bg-opacity-20 rounded-2xl p-4 flex items-center mb-8">
      <div className="bg-white flex items-center justify-center rounded-full h-12 w-12 mr-4 flex-shrink-0">
        <Image width={40} height={40} src="/pulse.svg" alt="" />
      </div>
      <div>
        <div className="text-sm font-light">Twój kot to zjadł?</div>
        <div className="text-sm font-light">
          Dowiedz się, <span className="font-bold underline">co zrobić.</span>
        </div>
      </div>
    </div>
  );
}
