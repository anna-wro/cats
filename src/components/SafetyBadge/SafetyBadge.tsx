import getColorScheme from './scheme';

type SafetyBadgeProps = Readonly<{
  danger: number;
  withBorder?: boolean;
}>;

export default function SafetyBadge({ danger, withBorder }: SafetyBadgeProps) {
  const scheme = getColorScheme(danger);

  return (
    <div
      className={` ${scheme.bg} w-12 h-12 rounded-2xl ${
        withBorder ? 'p-1.5 border-4 border-white' : 'p-2.5'
      }`}
    >
      <img src={scheme.icon} width={28} height={28} />
    </div>
  );
}
