import { useState } from 'react';

type ImageType = Readonly<{
  src: string;
  thumbnail: string;
  fallback: string;
  alt?: string;
}>;

const Image = ({ src, thumbnail, fallback, alt }: ImageType) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [height, setHeight] = useState(0);
  return (
    <div style={{ height: height }}>
      <img
        className={`image image--thumbnail ${
          isLoaded ? 'invisible' : 'visible'
        }  `}
        alt={alt ?? ''}
        src={thumbnail}
      />
      <img
        onLoad={(e) => {
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
      <img
        className="invisible"
        src={src}
        onLoad={(e) => {
          return setHeight(e.currentTarget.height);
        }}
      />
    </div>
  );
};
export default Image;
