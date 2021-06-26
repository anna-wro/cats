import cx from 'classnames';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import MobileGalleryItem from 'components/PlantGallery/MobileGalleryItem';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function MobileGallery({ plant }: PlantGalleryType) {
  return (
    <div>
      <div
        className="flex overflow-x-scroll"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {plant.imageID.map((ID, index) => (
          <MobileGalleryItem
            key={ID}
            ID={ID}
            imgAlt={plant.name.lat}
            containerClassNames={cx({
              'ml-4': index === 0,
            })}
          />
        ))}
      </div>
    </div>
  );
}
