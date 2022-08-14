import './Slider.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React from 'react';
import { Slide } from './Slide';
// requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ReactComponent as ArrowPrev } from '_assets/images/icons/prev.svg';
import { ReactComponent as ArrowNext } from '_assets/images/icons/next.svg';

export const Slider: React.FC = () => {
  return (
    <Carousel
      renderArrowPrev={(clickHandler) => (
        <ArrowPrev
          className="control-arrow control-prev"
          onClick={clickHandler}
        />
      )}
      renderArrowNext={(clickHandler) => (
        <ArrowNext
          className="control-arrow control-next"
          onClick={clickHandler}
        />
      )}
    >
      <Slide />
      <Slide />
      <Slide />
    </Carousel>
  );
};
