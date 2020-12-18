export function shuffleArray(array: any[]) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export function sortByName(lang: string) {
  let sortOrder = 1;
  if (lang[0] === '-') {
    sortOrder = -1;
    lang = lang.substr(1);
  }
  return function (a, b) {
    const result =
      a['name'][lang] < b['name'][lang]
        ? -1
        : a['name'][lang] > b['name'][lang]
        ? 1
        : 0;
    return result * sortOrder;
  };
}
