import { useRef, useState, useEffect } from 'react';
import { useElementScroll, useTransform, motion } from 'framer-motion';
import Credits from './Credits';
import usePhoto from 'utils/usePhoto';
import ImageContainer from 'components/Image/ImageContainer';

export default function PlantGalleryItem({ imgAlt, ID, scrollRef }) {
  const photo = usePhoto(ID);

  return (
    <ScrollBox scrollRef={scrollRef}>
      <div className="h-full my-14">
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
    </ScrollBox>
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
