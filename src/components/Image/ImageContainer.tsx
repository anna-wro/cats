import { useRef, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import Image from './Image';

type ImageContainerType = Readonly<{
  src: string;
  thumbnail: string;
  alt?: string;
}>;

const ImageContainer = ({ src, thumbnail, alt }: ImageContainerType) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      const element = ref.current;
      if (isIntersecting && element) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <div ref={ref} className="relative h-full overflow-hidden">
      {isVisible && <Image src={src} thumbnail={thumbnail} alt={alt} />}
    </div>
  );
};
export default ImageContainer;
