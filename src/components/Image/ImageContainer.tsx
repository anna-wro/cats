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
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });
  const aspectRatio = (height / width) * 100;

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-gray-light bg-opacity-30"
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      {isVisible && <Image src={src} thumbnail={thumbnail} alt={alt} />}
    </div>
  );
};
export default ImageContainer;
