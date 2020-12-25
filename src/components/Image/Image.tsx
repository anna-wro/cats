import { useState } from 'react';

type ImagePropsType = Readonly<{
  src: string;
  thumbnail: string;
  alt?: string;
}>;

const Image = ({ src, thumbnail, alt }: ImagePropsType) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <img
        className={`image image--thumbnail ${
          isLoaded ? 'invisible' : 'visible'
        }  `}
        alt={alt ?? ''}
        src={thumbnail}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className={`image image--full ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        alt={alt ?? ''}
        src={src}
      />
    </>
  );
};
export default Image;
