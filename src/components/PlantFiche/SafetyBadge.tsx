type SafetyBadgeProps = Readonly<{
  danger: number;
}>;

export default function SafetyBadge({ danger }: SafetyBadgeProps) {
  return (
    <div
      className={` ${
        danger === 0
          ? 'bg-blue-light'
          : danger === 3
          ? 'bg-red-light'
          : 'bg-orange-light'
      } w-12 h-12 p-2.5 rounded-2xl`}
    >
      <img
        src={
          danger === 0
            ? '/smile.svg'
            : danger === 3
            ? '/very-frowned.svg'
            : '/frown.svg'
        }
        width={30}
        height={30}
      />
    </div>
  );
}
