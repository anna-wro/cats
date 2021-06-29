import type { PlantType } from 'components/PlantFiche/PlantFiche';
import { getVariant } from 'components/SafetyScore/variants';

export const copy = {
  title: 'Rośliny dla kota',
  closeButtonAlt: 'zamknij',
  dangerHeadline: 'Zagrożenie',
  symptomsHeadline: 'Objawy',
  sourcesHeadline: 'Zweryfikuj informacje',
  otherNamesHeadline: 'Inne nazwy',
  copyrightsHeadline: 'Zdjęcie',
  plantSingularNominative: 'roślinę',
  plantPluralNominative: 'rośliny',
  plantPluralGenitive: 'roślin',
  toxicFilterLabel: 'Trujące',
  safeFilterLabel: 'Bezpieczne',
  safetyBadgeAlt: 'Zagrożenie',
  safePlantLabel: 'Bezpieczna',
  slightlyToxicPlantLabel: 'Lekko trująca',
  toxicPlantLabel: 'Trująca',
  highlyToxicPlantLabel: 'Silnie trująca',
  mainPageNav: 'Rośliny',
  blogPageNav: 'Blog',
  sortAscending: 'Po nazwie rosnąco',
  sortDescending: 'Po nazwie malejąco',
  footer: 'Anna Wróbel 🌱',
  whatNowHeadline: 'Twój kot to zjadł?',
  whatNowDesc: 'Dowiedz się, [html]co zrobić.[html]',
  symptomsIconAlt: 'Przewiń do sekcji: Objawy',
  whatNowIconAlt: 'Przewiń do sekcji: Co zrobić',
  sourcesIconAlt: 'Przewiń do sekcji: Zweryfikuj informacje',
  sortLabel: 'Sortuj wyniki',
  skipToMain: 'Przejdź do listy roślin',
  plantAriaLabel:
    'Roślina [NamePl] ([NameLat]) jest [Summary] - kliknij aby dowiedzieć się więcej',
};

export function getPlantAriaLabel(plant: PlantType) {
  const { label } = getVariant(plant.danger);

  return copy.plantAriaLabel
    .replace('[NamePl]', plant.name.pl[0])
    .replace('[NameLat]', plant.name.lat)
    .replace('[Summary]', label);
}

export default copy;
