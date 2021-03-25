import usePhoto from 'utils/usePhoto';
import { getPhotoLinks } from 'utils/flickr';
import ImageContainer from 'components/Image/ImageContainer';
import Credits from './Credits';
import type { PlantType } from 'components/PlantFiche/PlantFiche';
import { useRef, useState, useEffect } from 'react';
import { useElementScroll, useTransform, motion } from 'framer-motion';

type PlantGalleryType = Readonly<{ plant: PlantType }>;

export default function MobileGallery({ plant }: PlantGalleryType) {
  const scrollRef = useRef();
  let photos = [];
  let links = [];

  plant.imageID.forEach((ID) => {
    const photo = usePhoto(ID);
    photos.push(photo);
  });

  photos.forEach((photo) => {
    const link = photo ? getPhotoLinks(photo) : null;
    links.push(link);
  });

  return (
    <div
      className="flex overflow-x-scroll"
      style={{ scrollSnapType: 'x mandatory', scrollPadding: '50%' }}
    >
      {links.length > 0 &&
        photos[0] &&
        links.map((link, index) => (
          <div
            key={index}
            style={{ scrollSnapAlign: 'center' }}
            className="flex-shrink-0 inline-block mr-4"
          >
            <img src={link?.xl} className="h-52" />
            {/* <ImageContainer
              src={link?.xl}
              fallback={link?.l}
              thumbnail={link?.xs}
              alt={plant.name.lat}
              rounded
            /> */}
            {/* {photos[index] && (
              <Credits
                source={link.source}
                owner={photos[index].owner}
                license={photos[index].license}
              />
            )} */}
          </div>
        ))}
    </div>
  );
}
