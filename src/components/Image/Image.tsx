// NOTE: Next.js <Image /> can't be used there
/* eslint-disable @next/next/no-img-element */
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
        onLoad={() => {
          setIsLoaded(true);
        }}
        onError={e => {
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
        onLoad={e => {
          return setHeight(e.currentTarget.height);
        }}
        alt=""
      />
    </div>
  );
};
export default Image;
