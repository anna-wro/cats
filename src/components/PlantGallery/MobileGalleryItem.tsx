import cx from 'classnames';
import Credits from './Credits';
import usePhoto from 'utils/usePhoto';
import ImageContainer from 'components/Image/ImageContainer';

type MobileGalleryItemType = Readonly<{
  imgAlt: string;
  ID: string;
  containerClassNames?: string;
}>;

export default function MobileGalleryItem({
  imgAlt,
  ID,
  containerClassNames,
}: MobileGalleryItemType) {
  const photo = usePhoto(ID);

  return (
    <div
      style={{ scrollSnapAlign: 'center' }}
      className="flex-shrink-0 inline-block mr-4 w-5/6 h-72"
    >
      <div className={cx('h-60 max-w-full', containerClassNames)}>
        {photo && (
          <>
            <ImageContainer
              src={photo.links.xl}
              fallback={photo.links.l}
              thumbnail={photo.links.xs}
              alt={imgAlt}
              rounded
            />

            <Credits
              source={photo.links.source}
              owner={photo.owner}
              license={photo.license}
            />
          </>
        )}
      </div>
    </div>
  );
}
