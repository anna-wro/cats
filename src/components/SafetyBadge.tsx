import Image from 'next/image';

type SafetyBadgeProps = Readonly<{
  isSafe: boolean;
}>;

export default function SafetyBadge({ isSafe }: SafetyBadgeProps) {
  return (
    <div
      className={`inline-flex ${
        isSafe ? 'bg-blue-light' : 'bg-orange-light'
      } p-2.5 rounded-2xl`}
    >
      <Image
        src={isSafe ? '/smile.svg' : '/frown.svg'}
        width={30}
        height={30}
      />
    </div>
  );
}
