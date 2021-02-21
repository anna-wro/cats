import usePhoto from 'utils/usePhoto';
import { getPhotoLinks } from 'utils/flickr';
import ImageContainer from 'components/Image/ImageContainer';
import Credits from './Credits';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import { useRef, useState, useEffect, useMemo } from 'react';
import { useElementScroll, useTransform, motion } from 'framer-motion';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function PlantGallery({ plant }: PlantGalleryType) {
  const scrollRef = useRef();
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
      <div
        className="flex-1 overflow-y-scroll w-full py-10 px-32"
        ref={scrollRef}
      >
        <div className="flex items-center justify-center">
          <div className="w-full max-w-5xl rounded-2xl">
            {links.length > 0 && photos[0] && (
              <>
                {links.map((link, index) => (
                  <ParallaxBox scrollRef={scrollRef}>
                    <div className="mt-6 h-full">
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
                  </ParallaxBox>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ParallaxBox = ({ children, scrollRef, ...rest }) => {
  const { scrollY } = useElementScroll(scrollRef);
  const ref = useRef<HTMLDivElement>();
  const [elementTop, setElementTop] = useState(null);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(
    () =>
      scrollY.onChange((latest) => {
        console.log({ scrollY: latest });
      }),
    [],
  );

  console.log();
  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
      setClientHeight(window.innerHeight);
    };

    setValues();
    document.addEventListener('load', setValues);
    window.addEventListener('resize', setValues);

    return () => {
      document.removeEventListener('load', setValues);
      window.removeEventListener('resize', setValues);
    };
  }, [ref]);

  const opacityRange = [0, 1];
  const yOpacityRange = [elementBottom, elementTop];
  const opacity = useTransform(scrollY, yOpacityRange, opacityRange);

  console.log('scrollY', scrollY);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      style={{ height: '70vh', opacity }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
