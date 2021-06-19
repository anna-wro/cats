import usePhoto from 'utils/usePhoto';
import { getPhotoLinks } from 'utils/flickr';
import ImageContainer from 'components/Image/ImageContainer';
import Credits from './Credits';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import { useRef, useState, useEffect } from 'react';
import { useElementScroll, useTransform, motion } from 'framer-motion';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function PlantGallery({ plant }: PlantGalleryType) {
  const scrollRef = useRef();
  let photos = [];
  let links = [];

  plant.imageID.forEach(ID => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const photo = usePhoto(ID);
    photos.push(photo);
  });

  photos.forEach(photo => {
    const link = photo ? getPhotoLinks(photo) : null;
    links.push(link);
  });

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div
        className="flex-1 overflow-y-scroll w-full py-10 px-4 md:px-20 lg:px-32"
        ref={scrollRef}
      >
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl rounded-2xl">
            {links.length > 0 && photos[0] && (
              <>
                {links.map((link, index) => (
                  <ScrollBox scrollRef={scrollRef} key={index}>
                    <div className="h-full my-14">
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
                  </ScrollBox>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ScrollBox = ({ children, scrollRef, ...rest }) => {
  const { scrollY } = useElementScroll(scrollRef);
  const ref = useRef<HTMLDivElement>();
  const [elementTop, setElementTop] = useState(null);
  const [elementBottom, setElementBottom] = useState(0);
  const [scrollableHeight, setScrollableHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
      setScrollableHeight(scrollRef.current.offsetHeight);
    };

    setValues();
    document.addEventListener('load', setValues);
    window.addEventListener('resize', setValues);

    return () => {
      document.removeEventListener('load', setValues);
      window.removeEventListener('resize', setValues);
    };
  }, [ref, scrollRef]);

  const opacityRange = [0, 1, 1, 0];
  const scaleRange = [0.8, 1, 1, 0.8];
  const viewportRange = [
    elementBottom,
    elementTop,
    elementBottom - scrollableHeight,
    elementTop - scrollableHeight,
  ];

  const opacity = useTransform(scrollY, viewportRange, opacityRange);
  const scale = useTransform(scrollY, viewportRange, scaleRange);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      style={{ height: '40vh', opacity, scale }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
