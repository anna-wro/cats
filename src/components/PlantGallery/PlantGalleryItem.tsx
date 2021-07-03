import { useEffect } from 'react';
import Credits from './Credits';
import usePhoto from 'utils/usePhoto';
import ImageContainer from 'components/Image/ImageContainer';
import ScrollBox from 'components/PlantGallery/ScrollBox';

export default function PlantGalleryItem({
  imgAlt,
  ID,
  scrollRef,
  onDataFetched,
  scrollBoxEnabled,
}) {
  const photo = usePhoto(ID);

  // REFACTOR: React Hook useEffect has a missing dependency: 'onDataFetched'.ń
  useEffect(() => {
    if (photo) {
      onDataFetched();
    }
  }, [photo]);

  return scrollBoxEnabled && photo ? (
    <ScrollBox scrollRef={scrollRef}>
      <div className="h-full my-14">
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
      </div>
    </ScrollBox>
  ) : (
    <div />
  );
}
