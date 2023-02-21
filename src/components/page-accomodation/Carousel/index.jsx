/**
 * PICTURE CAROUSEL
 * -If the user is at the first image and clicks on "previous image", the gallery displays the last image.
 * -If the user is at the last image and clicks on "next image", the gallery displays the first image.
 */


import './style.css'
import PropTypes from "prop-types";
import { useState } from 'react';
import iconArrow from '../../../assets/images/icons/arrow-x.svg'

export function Carousel({ pictures }) {
  const [pictureIndex, setPictureIndex] = useState(0);
  const lastPictureIndex = pictures.length - 1;

  const previous = () => setPictureIndex(pictureIndex === 0 ? lastPictureIndex : pictureIndex - 1);
  const next = () => setPictureIndex(pictureIndex === lastPictureIndex ? 0 : pictureIndex + 1);


  // Case no picture
  if (!pictures || pictures.length === 0) {
    return <div className='Carousel empty'>Aucune photo n'est disponible pour ce logement.</div>;

  // Case single picture
  } else if (pictures.length === 1) {
    return (
      <div className='Carousel'>
        <img src={pictures[0]} alt='Logement' />
      </div>
    );

  // Case multiple pictures
  } else {
    return (
      <div className='Carousel'>
        <button onClick={previous} className='previous'>
          <img src={iconArrow} alt='Flèche gauche' />
        </button>
        <img src={pictures[pictureIndex]} alt='Logement' />
        <div className='counter'>
          {pictureIndex + 1}/{pictures.length}
        </div>
        <button onClick={next} className='next'>
          <img src={iconArrow} alt='Flèche droite' />
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
};


export default Carousel;