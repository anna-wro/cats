import { useState } from 'react';

const Image = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <img
        className={`image thumb ${
          isLoaded ? 'invisible' : 'visible'
        } h-full w-full object-cover object-center `}
        alt={props.alt}
        src={props.thumbnail}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="image full h-full w-full object-cover object-center"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={props.alt}
        src={props.src}
      />
    </>
  );
};
export default Image;
