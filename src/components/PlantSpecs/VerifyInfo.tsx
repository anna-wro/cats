import { useState } from 'react';
import Image from 'next/image';
import checkCircle from '../../../public/check-circle.svg';
import chevronRight from '../../../public/chevron-right.svg';

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

  // TODO: links: name and href in database, name optional, if none display href
  const [showSource, setShowSource] = useState(false);
  return (
    <div className="border border-gray-light rounded-2xl p-4 mb-8">
      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center justify-center">
          <div className="bg-dark bg-opacity-60 flex items-center justify-center rounded-full h-12 w-12 mr-4 flex-shrink-0">
            <Image
              className="w-6 h-6"
              src={checkCircle}
              width={24}
              height={24}
              alt="check circle"
            />
          </div>
          <div className="text-sm font-light">Zweryfikuj informacje</div>
        </div>
        <div
          className={`bg-gray bg-opacity-40 hover:bg-opacity-50 rounded-full 
    flex items-center justify-center  w-4 h-4 flex-shrink-0 ${
      showSource && 'transform rotate-90'
    }`}
        >
          <Image
            className="h-2"
            src={chevronRight}
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
