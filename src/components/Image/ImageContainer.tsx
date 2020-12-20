import { useRef, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import Image from './Image';

const ImageContainer = (props) => {
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
  const aspectRatio = (props.height / props.width) * 100;

  return (
    <div ref={ref} style={{ paddingBottom: `${aspectRatio}%` }}>
      {isVisible && <Image {...props} />}
    </div>
  );
};
export default ImageContainer;
