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
      <div className="flex-1 overflow-y-scroll hide-scrollbar">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg rounded-2xl">
            {links.length > 0 && photos[0] && (
              <>
                {links.map((link, index) => (
                  <div className="mt-6">
                    <ImageContainer
                      key={link?.source}
                      src={link?.xl}
                      fallback={link?.l}
                      thumbnail={link?.xs}
                      alt={plant.name.lat}
                      rounded
                    />
                    {photos[index] && (
                      <Credits
                        source={link.source}
                        owner={photos[index].owner}
                        license={photos[index].license}
                      />
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
