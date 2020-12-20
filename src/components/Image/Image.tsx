import { useState } from 'react';

const Image = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <img
        className={`absolute h-full w-full top-0 left-0 object-cover object-center image--thumbnail ${
          isLoaded ? 'invisible' : 'visible'
        }  `}
        alt={props.alt}
        src={props.thumbnail}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className={`absolute h-full w-full top-0 left-0 object-cover object-center image--full ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        alt={props.alt}
        src={props.src}
      />
    </>
  );
};
export default Image;
