import cx from 'classnames';
import Credits from './Credits';
import usePhoto from 'utils/usePhoto';
import ImageContainer from 'components/Image/ImageContainer';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function MobileGallery({ plant }: PlantGalleryType) {
  const photos = [];

  plant.imageID.forEach(ID => {
    // REFACTOR: fix eslint warning
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const photo = usePhoto(ID);
    photos.push(photo);
  });

  return (
    <div>
      <div
        className="flex overflow-x-scroll"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {photos &&
          photos.map((photo, index, array) => (
            <div
              key={index}
              style={{ scrollSnapAlign: 'center' }}
              className="flex-shrink-0 inline-block mr-4 w-5/6 h-72"
            >
              <div
                className={cx('h-60 max-w-full', {
                  'ml-4': index === 0,
                  'mr-4': index === array.length - 1,
                })}
              >
                <ImageContainer
                  src={photo?.links?.xl}
                  fallback={photo?.links?.l}
                  thumbnail={photo?.links?.xs}
                  alt={plant.name.lat}
                  rounded
                />
                {photo && (
                  <Credits
                    source={photo?.links?.source}
                    owner={photo.owner}
                    license={photo.license}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
