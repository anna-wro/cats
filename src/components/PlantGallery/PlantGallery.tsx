import usePhoto from 'utils/usePhoto';
import { getPhotoLinks } from 'utils/flickr';
import ImageContainer from 'components/Image/ImageContainer';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function PlantGallery({ plant }: PlantGalleryType) {
  const photo = usePhoto(plant.imageID[0]);
  const links = photo ? getPhotoLinks(photo) : null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full h-auto max-w-lg rounded-2xl bg-gray-light bg-opacity-30">
        {links && (
          // <ImageContainer
          //   src={links.xl}
          //   thumbnail={links.xs}
          //   alt={plant.name.lat}
          // />
          <img
            src={links.xl}
            onError={(e) => {
              const element = e.currentTarget as HTMLImageElement;
              element.src = links.l;
            }}
            className="rounded-2xl"
          />
        )}
      </div>
    </div>
  );
}
