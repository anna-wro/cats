import type { PlantType } from 'components/PlantFiche/PlantFiche';
import { makeStartCase } from 'utils/text';

type OtherNamesPropsType = Readonly<{ lang: string; names: string[] }>;

export default function OtherNames({ lang, names }: OtherNamesPropsType) {
  return (
    <div className="flex">
      <div className="flex items-center justify-center h-4 w-7 bg-gray bg-opacity-20 rounded-full mr-2 text-xxs font-semibold">
        {lang.toUpperCase()}
      </div>
      <div>
        {names.map((name) => (
          <div className="text-sm">{makeStartCase(name)}</div>
        ))}
      </div>
    </div>
  );
}
