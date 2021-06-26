import { useRef } from 'react';
import PlantGalleryItem from './PlantGalleryItem';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function PlantGallery({ plant }: PlantGalleryType) {
  const scrollRef = useRef();

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div
        className="flex-1 overflow-y-scroll w-full py-10 px-4 md:px-20 lg:px-32"
        ref={scrollRef}
      >
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl rounded-2xl">
            {plant.imageID.map(ID => (
              <PlantGalleryItem
                key={ID}
                ID={ID}
                imgAlt={plant.name.lat}
                scrollRef={scrollRef}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
