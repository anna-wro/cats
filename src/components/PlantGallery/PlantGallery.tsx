import { useRef, useState, useEffect } from 'react';
import PlantGalleryItem from './PlantGalleryItem';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function PlantGallery({ plant }: PlantGalleryType) {
  const scrollRef = useRef();
  const [loadedPhotoData, setLoadedPhotoData] = useState(0);
  const [scrollBoxEnabled, setScrollBoxEnabled] = useState(false);
  const requiredImagesCount = plant.imageID.length;

  const handlePhotoDataFetched = () => {
    setLoadedPhotoData(loadedPhotoData + 1);
  };

  useEffect(() => {
    if (loadedPhotoData >= requiredImagesCount) {
      setScrollBoxEnabled(true);
    }
  }, [loadedPhotoData, requiredImagesCount]);

  return (
    <div
      className="flex flex-col items-center w-full h-full"
      role="complementary"
    >
      <div
        className="flex-1 overflow-y-scroll w-full py-10 px-4 md:px-20 lg:px-32"
        ref={scrollRef}
      >
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl rounded-2xl">
            {plant.imageID.map((ID, index) => (
              <PlantGalleryItem
                key={index}
                ID={ID}
                imgAlt={plant.name.lat}
                scrollRef={scrollRef}
                scrollBoxEnabled={scrollBoxEnabled}
                onDataFetched={handlePhotoDataFetched}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
