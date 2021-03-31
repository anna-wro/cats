import { useState } from 'react';

type VerifyInfoType = {
  sources: string[];
};

export default function VerifyInfo({ sources }: VerifyInfoType) {
  // TODO: links: name and href in database, name optional, if none display href
  const [showSource, setShowSource] = useState(false);
  return (
    <div className="border border-gray-light rounded-2xl p-4 mb-8">
      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setShowSource(!showSource)}
      >
        <div className="flex items-center justify-center">
          <div className="bg-dark bg-opacity-60 flex items-center justify-center rounded-full h-12 w-12 mr-4 flex-shrink-0">
            <img className="w-6 h-6" src="/check-circle.svg" />
          </div>
          <div className="text-sm font-light">Zweryfikuj informacje</div>
        </div>
        <div
          className={`bg-gray bg-opacity-40 hover:bg-opacity-50 rounded-full 
    flex items-center justify-center  w-4 h-4 flex-shrink-0 ${
      showSource && 'transform rotate-90'
    }`}
        >
          <img className="h-2" src="/chevron-right.svg" />
        </div>
      </div>
      {showSource && (
        <ul className="list-decimal pl-4 mt-4 space-y-1.5">
          {sources.map((source) => (
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
