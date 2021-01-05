export function getVariant(danger: number) {
  switch (danger) {
    case 0:
      return {
        text: 'text-blue',
        bg: 'bg-blue-light',
        icon: '/smile.svg',
        label: 'Bezpieczna',
      };
    case 1:
    case 2:
    default:
      return {
        text: 'text-orange',
        bg: 'bg-orange-light',
        icon: '/frown.svg',
        label: 'Trująca',
      };
    case 3:
      return {
        text: 'text-red',
        bg: 'bg-red-light',
        icon: '/very-frowned.svg',
        label: 'Silnie trująca',
      };
  }
}

export function getProgress(danger: number) {
  switch (danger) {
    case 0:
      return { label: 'Bezpieczna', value: 'w-2', bg: 'bg-blue' };
    case 1:
      return { label: 'Lekko trująca', value: 'w-1/3', bg: 'bg-orange' };
    case 2:
    default:
      return { label: 'Trująca', value: 'w-2/3', bg: 'bg-orange' };
    case 3:
      return { label: 'Silnie trująca', value: 'w-full', bg: 'bg-red' };
  }
}
