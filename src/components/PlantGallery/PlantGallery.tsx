import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function PlantGallery({ plant }: PlantGalleryType) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-blue-light">
      plant gallery placeholder
    </div>
  );
}
