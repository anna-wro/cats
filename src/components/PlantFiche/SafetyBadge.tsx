type SafetyBadgeProps = Readonly<{
  danger: number;
}>;

function getColorScheme(danger) {
  switch (danger) {
    case 0:
      return { bg: 'bg-blue-light', icon: '/smile.svg' };
    case 1:
      return { bg: 'bg-orange-light', icon: '/meh.svg' };
    case 2:
    default:
      return { bg: 'bg-orange-light', icon: '/frown.svg' };
    case 3:
      return { bg: 'bg-red-light', icon: '/very-frowned.svg' };
  }
}

export default function SafetyBadge({ danger }: SafetyBadgeProps) {
  const scheme = getColorScheme(danger);

  return (
    <div className={` ${scheme.bg} w-12 h-12 p-2.5 rounded-2xl`}>
      <img src={scheme.icon} width={30} height={30} />
    </div>
  );
}
