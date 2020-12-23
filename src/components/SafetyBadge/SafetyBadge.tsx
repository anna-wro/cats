import getColorScheme from './scheme';

type SafetyBadgeProps = Readonly<{
  danger: number;
  withBorder?: boolean;
}>;

export default function SafetyBadge({ danger, withBorder }: SafetyBadgeProps) {
  const scheme = getColorScheme(danger);

  return (
    <div
      className={`w-12 h-12 rounded-2xl flex items-center justify-center 
      ${scheme.bg} ${withBorder && 'border-4 border-white'}`}
    >
      <img src={scheme.icon} width={28} height={28} />
    </div>
  );
}
