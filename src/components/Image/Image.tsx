import { useState } from 'react';

type ImageType = Readonly<{
  src: string;
  thumbnail: string;
  alt?: string;
}>;

const Image = ({ src, thumbnail, alt }: ImageType) => {
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
