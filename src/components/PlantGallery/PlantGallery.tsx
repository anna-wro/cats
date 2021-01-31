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
      <div className="flex-1 overflow-y-scroll" ref={scrollRef}>
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

const ParallaxBox = ({
  children,
  yOffset = 1000, // number > 0
  easing = [0.42, 0, 0.58, 1],
  scrollRef,
  triggerPoint = 0.2, // value between 0 and 1 (top and bottom of the window), point to start animation
  fadeOut = true, // true | false fade an element out on end of the animation
  ...rest
}) => {
  const { scrollY } = useElementScroll(scrollRef);
  const ref = useRef();
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
      setClientHeight(window.innerHeight);
    };
    console.log();
    setValues(ref.current.offsetTop);
    document.addEventListener('load', setValues);
    window.addEventListener('resize', setValues);

    return () => {
      document.removeEventListener('load', setValues);
      window.removeEventListener('resize', setValues);
    };
  }, [ref, yOffset]);

  // const transformInitialValue =
  //   elementTop - window.innerHeight <= 0 ? 0 : elementTop - window.innerHeight;
  const transformInitialValue = elementTop - clientHeight * triggerPoint;
  const transformFinalValue = elementTop + yOffset;

  const yRange = [transformInitialValue, transformFinalValue];

  const y = useTransform(scrollY, yRange, [0, -yOffset], easing);

  const opacityInitialValue = fadeOut ? 0 : 1;
  const opacityRange = useMemo(() => [opacityInitialValue, 1], [
    opacityInitialValue,
  ]);

  // const yOpacityRange = [transformInitialValue, transformFinalValue];
  const yOpacityRange = [elementBottom, transformFinalValue - yOffset];
  const opacity = useTransform(
    scrollY,
    yOpacityRange,
    opacityRange,
    'anticipate',
  );

  console.log('scrollY', scrollY);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      style={{ height: '70vh' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
