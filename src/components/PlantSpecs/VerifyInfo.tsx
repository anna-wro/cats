import { useState } from 'react';
import Image from 'next/image';
import { copy } from 'consts/copy';

type VerifyInfoType = {
  sources: string[];
};

export default function VerifyInfo({ sources }: VerifyInfoType) {
  function handleClick() {
    setShowSource(!showSource);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  // IDEA: links: name and href in database, name optional, if none display href
  const [showSource, setShowSource] = useState(false);
  return (
    <div
      className="border border-gray-light rounded-2xl p-4 mb-8 cursor-pointer select-none outline-rounded"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-center">
          <div className="bg-dark bg-opacity-60 flex items-center justify-center rounded-full h-12 w-12 mr-4 flex-shrink-0">
            <Image
              className="w-6 h-6"
              src="/check-circle-light.svg"
              width={24}
              height={24}
              alt="check circle"
            />
          </div>
          <h3 className="text-sm font-light">{copy.sourcesHeadline}</h3>
        </div>
        <div
          className={`bg-gray bg-opacity-40 hover:bg-opacity-50 rounded-full 
    flex items-center justify-center  w-4 h-4 flex-shrink-0 ${
      showSource && 'transform rotate-90'
    }`}
        >
          <Image
            className="h-2"
            src="/chevron-right.svg"
            width={5}
            height={8}
            alt="chevron right"
          />
        </div>
      </div>
      {showSource && (
        <ul className="list-decimal pl-4 mt-4 space-y-1.5">
          {sources.map(source => (
            <li className="text-xs break-all" key={source}>
              <a href={`https://${source}`} className="hover:underline">
                {source}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
