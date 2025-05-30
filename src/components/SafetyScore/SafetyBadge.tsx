/* eslint-disable @next/next/no-img-element */
import { getVariant } from './variants';

type SafetyBadgeProps = Readonly<{
  danger: number;
  withBorder?: boolean;
  large?: boolean;
}>;

export default function SafetyBadge({
  danger,
  withBorder,
  large,
}: SafetyBadgeProps) {
  const { bg, icon, emojiAlt } = getVariant(danger);

  return (
    <div
      className={`flex items-center justify-center flex-shrink-0
      ${bg} ${
        withBorder ? 'border-4 border-white rounded-full' : 'rounded-2xl'
      } ${large ? 'w-14 h-14' : 'w-12 h-12'}`}
    >
      <img
        src={icon}
        width={large ? 34 : 28}
        height={large ? 34 : 28}
        alt={emojiAlt}
      />
    </div>
  );
}
