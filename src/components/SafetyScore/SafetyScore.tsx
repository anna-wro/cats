import { getVariant, getProgress } from './variants';
import SafetyBadge from './SafetyBadge';

type SafetyScorePropsType = Readonly<{
  danger: number;
}>;

export default function Score({ danger }: SafetyScorePropsType) {
  const { bar } = getVariant(danger);
  const { label, value } = getProgress(danger);

  return (
    <div className="flex items-center">
      <SafetyBadge danger={danger} large />
      <div className="ml-4 flex-1">
        <div className="text-sm font-semibold"> {label}</div>
        <div className="h-2 w-full bg-gray bg-opacity-20 rounded-full mt-1">
          <div className={`w-${value} h-2 rounded-full ${bar}`}></div>
        </div>
      </div>
    </div>
  );
}
