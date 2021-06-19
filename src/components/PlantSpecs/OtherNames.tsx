import { makeStartCase } from 'utils/text';

export default function OtherNames({ names }) {
  return (
    <div>
      {['en', 'pl'].map(lang => {
        const plantNames = Object.entries(names[lang]);

        return (
          <div key={lang} className="flex mb-2">
            <div className="flex items-center justify-center h-4 w-7 bg-gray bg-opacity-20 rounded-full mr-2 text-xxs font-semibold">
              {lang.toUpperCase()}
            </div>
            <div>
              {plantNames.map(([key, value]) => (
                <div key={key} className="text-sm">
                  {makeStartCase(value.toString())}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
