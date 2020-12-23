function getColorScheme(danger: number) {
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

export default getColorScheme;
