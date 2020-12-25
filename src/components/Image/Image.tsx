import { useState } from 'react';

type ImageType = Readonly<{
  src: string;
  thumbnail: string;
  fallback: string;
  alt?: string;
}>;

const Image = ({ src, thumbnail, fallback, alt }: ImageType) => {
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
        onError={(e) => {
          const element = e.currentTarget as HTMLImageElement;
          element.src = fallback;
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
