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
        label: 'Uważaj',
      };
    case 3:
      return {
        text: 'text-red',
        bg: 'bg-red-light',
        icon: '/very-frowned.svg',
        label: 'Trująca',
      };
  }
}

export function getProgress(danger: number) {
  switch (danger) {
    case 0:
      return { label: 'Bezpieczna', value: '2', color: 'blue' };
    case 1:
      return { label: 'Lekko trująca', value: '1/3', color: 'orange' };
    case 2:
    default:
      return { label: 'Trująca', value: '2/3', color: 'orange' };
    case 3:
      return { label: 'Silnie trująca', value: 'full', color: 'red' };
  }
}
