type SafetyBadgeProps = Readonly<{
  danger: number;
}>;

export default function SafetyBadge({ danger }: SafetyBadgeProps) {
  return (
    <div
      className={` ${
        danger === 0 ? 'bg-blue-light' : 'bg-orange-light'
      } w-12 h-12 p-2.5 rounded-2xl`}
    >
      <img
        src={danger === 0 ? '/smile.svg' : '/frown.svg'}
        width={30}
        height={30}
      />
    </div>
  );
}
