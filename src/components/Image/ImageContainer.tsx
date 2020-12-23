import { useRef, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import Image from './Image';

type ImageContainerPropsType = Readonly<{
  src: string;
  thumbnail: string;
  height: number;
  width: number;
  alt?: string;
}>;

const ImageContainer = ({
  src,
  thumbnail,
  height,
  width,
  alt,
}: ImageContainerPropsType) => {
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
      className="relative h-full overflow-hidden"
    >
      {isVisible && <Image src={src} thumbnail={thumbnail} alt={alt} />}
    </div>
  );
};
export default ImageContainer;
