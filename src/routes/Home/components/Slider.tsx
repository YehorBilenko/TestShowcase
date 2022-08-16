import './Slider.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React from 'react';
import { Slide } from './Slide';
import { ISlider } from '../interfaces';
import { Carousel } from 'react-responsive-carousel';
import { ReactComponent as ArrowPrev } from '_assets/images/icons/prev.svg';
import { ReactComponent as ArrowNext } from '_assets/images/icons/next.svg';

export const Slider: React.FC<ISlider> = ({ items }) => {
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
      {items.map((item) => (
        <Slide key={item.id} {...item} />
      ))}
    </Carousel>
  );
};
