import { useRef, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import Image from './Image';

type ImageContainerType = Readonly<{
  src: string;
  thumbnail: string;
  fallback: string;
  alt?: string;
  rounded?: boolean;
}>;

const ImageContainer = ({
  src,
  thumbnail,
  fallback,
  alt,
  rounded,
}: ImageContainerType) => {
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
    <div
      ref={ref}
      className={`relative h-full overflow-hidden ${rounded && 'rounded-2xl'}`}
    >
      {isVisible && (
        <Image src={src} fallback={fallback} thumbnail={thumbnail} alt={alt} />
      )}
    </div>
  );
};
export default ImageContainer;
