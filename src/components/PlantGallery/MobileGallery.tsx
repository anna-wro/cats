import cx from 'classnames';
import Credits from './Credits';
import usePhoto from 'utils/usePhoto';
import { getPhotoLinks } from 'utils/flickr';
import ImageContainer from 'components/Image/ImageContainer';
import type { PlantType } from 'components/PlantFiche/PlantFiche';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function MobileGallery({ plant }: PlantGalleryType) {
  const photos = [];
  const links = [];

  plant.imageID.forEach(ID => {
    // REFACTOR: fix eslint warning
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const photo = usePhoto(ID);
    photos.push(photo);
  });

  photos.forEach(photo => {
    const link = photo ? getPhotoLinks(photo) : null;
    links.push(link);
  });

  return (
    <div>
      <div
        className="flex overflow-x-scroll"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {links.length > 0 &&
          photos[0] &&
          links.map((link, index, array) => (
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
            </div>
          ))}
      </div>
    </div>
  );
}
