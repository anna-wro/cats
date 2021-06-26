import Credits from './Credits';
import usePhoto from 'utils/usePhoto';
import ImageContainer from 'components/Image/ImageContainer';
import ScrollBox from 'components/PlantGallery/ScrollBox';

export default function PlantGalleryItem({ imgAlt, ID, scrollRef }) {
  const photo = usePhoto(ID);

  return photo ? (
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
  ) : null;
}
