import usePhoto from 'utils/usePhoto';
import { getPhotoLinks } from 'utils/flickr';
import ImageContainer from 'components/Image/ImageContainer';
import Credits from './Credits';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function PlantGallery({ plant }: PlantGalleryType) {
  let photos = [];
  let links = [];

  plant.imageID.forEach((ID) => {
    const photo = usePhoto(ID);
    photos.push(photo);
  });

  photos.forEach((photo) => {
    const link = photo ? getPhotoLinks(photo) : null;
    links.push(link);
  });

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex-1 overflow-y-scroll">
        <div className="flex items-center justify-center">
          <div className="w-full h-auto max-w-lg rounded-2xl bg-gray-light bg-opacity-30">
            {links.length > 0 &&
              links.map((link) => (
                <ImageContainer
                  key={link?.source}
                  src={link?.xl}
                  fallback={link?.l}
                  thumbnail={link?.xs}
                  alt={plant.name.lat}
                  rounded
                />
              ))}
          </div>
        </div>
      </div>
      {/* TODO: display credits of current photo */}
      {photos[0] && (
        <Credits
          source={photos[0].source}
          owner={photos[0].owner}
          license={photos[0].license}
        />
      )}
    </div>
  );
}
