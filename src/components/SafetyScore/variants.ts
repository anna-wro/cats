import { copy } from 'consts/copy';

export function getVariant(danger: number) {
  switch (danger) {
    case 0:
      return {
        text: 'text-blue',
        bg: 'bg-blue-light',
        icon: '/smile.svg',
        label: copy.safePlantLabel,
        emojiAlt: copy.safePlantEmojiAlt,
      };
    case 1:
    case 2:
    default:
      return {
        text: 'text-orange',
        bg: 'bg-orange-light',
        icon: '/frown.svg',
        label: copy.toxicPlantLabel,
        emojiAlt: copy.toxicPlantEmojiAlt,
      };
    case 3:
      return {
        text: 'text-red',
        bg: 'bg-red-light',
        icon: '/very-frowned.svg',
        label: copy.highlyToxicPlantLabel,
        emojiAlt: copy.highlyToxicPlantEmojiAlt,
      };
  }
}

export function getProgress(danger: number) {
  switch (danger) {
    case 0:
      return { label: copy.safePlantLabel, value: 'w-2', bg: 'bg-blue' };
    case 1:
      return {
        label: copy.slightlyToxicPlantLabel,
        value: 'w-1/3',
        bg: 'bg-orange',
      };
    case 2:
    default:
      return { label: copy.toxicPlantLabel, value: 'w-2/3', bg: 'bg-orange' };
    case 3:
      return {
        label: copy.highlyToxicPlantLabel,
        value: 'w-full',
        bg: 'bg-red',
      };
  }
}
