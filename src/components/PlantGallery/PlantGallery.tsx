import usePhoto from 'utils/usePhoto';
import { getPhotoLinks } from 'utils/flickr';
import ImageContainer from 'components/Image/ImageContainer';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function PlantGallery({ plant }: PlantGalleryType) {
  const photo = usePhoto(plant.imageID[0]);
  const links = photo ? getPhotoLinks(photo) : null;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex-1">
        <div className="flex h-full items-center justify-center">
          <div className="w-full h-auto max-w-lg rounded-2xl bg-gray-light bg-opacity-30">
            {links && (
              <ImageContainer
                src={links.xl}
                fallback={links.l}
                thumbnail={links.xs}
                alt={plant.name.lat}
                rounded
              />
            )}
          </div>
        </div>
      </div>
      {photo?.owner && (
        <a
          className="block self-end text-gray text-xs hover:underline"
          href={links.source}
        >
          Zdjęcie:{' '}
          {photo.owner.realname !== ''
            ? photo.owner.realname
            : photo.owner.username}
        </a>
      )}
    </div>
  );
}
