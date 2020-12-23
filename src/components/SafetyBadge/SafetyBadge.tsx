import getColorScheme from './scheme';

type SafetyBadgeProps = Readonly<{
  danger: number;
}>;

export default function SafetyBadge({ danger }: SafetyBadgeProps) {
  const scheme = getColorScheme(danger);

  return (
    <div className={` ${scheme.bg} w-12 h-12 p-2.5 rounded-2xl`}>
      <img src={scheme.icon} width={30} height={30} />
    </div>
  );
}
