import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantDetailsType = Readonly<{ plant: PlantType }>;

export default function PlantSpecs({ plant }: PlantDetailsType) {
  return <div>{plant.name.pl[0]}</div>;
}
