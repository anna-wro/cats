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
        className={`absolute h-full w-full top-0 left-0 object-cover object-center image--thumbnail ${
          isLoaded ? 'invisible' : 'visible'
        }  `}
        alt={alt ?? ''}
        src={thumbnail}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className={`absolute h-full w-full top-0 left-0 object-cover object-center image--full ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        alt={alt ?? ''}
        src={src}
      />
    </>
  );
};
export default Image;
