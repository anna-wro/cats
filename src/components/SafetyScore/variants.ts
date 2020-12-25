export function getVariant(danger: number) {
  switch (danger) {
    case 0:
      return {
        text: 'text-blue',
        bg: 'bg-blue-light',
        bar: 'bg-blue',
        icon: '/smile.svg',
        label: 'Bezpieczna',
      };
    case 1:
    case 2:
    default:
      return {
        text: 'text-orange',
        bar: 'bg-orange',
        bg: 'bg-orange-light',
        icon: '/frown.svg',
        label: 'Uważaj',
      };
    case 3:
      return {
        text: 'text-red',
        bg: 'bg-red-light',
        bar: 'bg-red',
        icon: '/very-frowned.svg',
        label: 'Trująca',
      };
  }
}

export function getProgress(danger: number) {
  switch (danger) {
    case 0:
      return { label: 'Bezpieczna', value: 'full' };
    case 1:
      return { label: 'Lekko trująca', value: '1/3' };
    case 2:
    default:
      return { label: 'Trująca', value: '2/3' };
    case 3:
      return { label: 'Silnie trująca', value: 'full' };
  }
}
