import { useState } from 'react';

const Image = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <img
        className={`h-32 w-full object-cover object-center thumb ${
          isLoaded ? 'hidden' : 'visible'
        }`}
        alt={props.alt}
        src={props.thumbnail}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="h-32 w-full object-cover object-center full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={props.alt}
        src={props.src}
      />
    </>
  );
};
export default Image;
