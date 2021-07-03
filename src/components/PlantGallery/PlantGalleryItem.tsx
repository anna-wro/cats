import { useState } from 'react';
import Credits from './Credits';
import usePhoto from 'utils/usePhoto';
import ImageContainer from 'components/Image/ImageContainer';
import ScrollBox from 'components/PlantGallery/ScrollBox';

export default function PlantGalleryItem({ imgAlt, ID, scrollRef }) {
  const photo = usePhoto(ID);
  const [showItem, setShowItem] = useState(false);

  setTimeout(() => setShowItem(true), 2000);

  return showItem && photo ? (
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
