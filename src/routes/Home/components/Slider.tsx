import './Slider.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// requires a loader
import React from 'react';
import { Slide } from './Slide';
import { ISlider } from '../interfaces';
import { useWidth } from 'utils/useWidth';
import { Carousel } from 'react-responsive-carousel';
import { ReactComponent as ArrowPrev } from '_assets/images/icons/prev.svg';
import { ReactComponent as ArrowNext } from '_assets/images/icons/next.svg';

export const Slider: React.FC<ISlider> = ({ items }) => {
  const width = useWidth();
  const isMobile = width < 765;
  const showNavs = isMobile ? items.length > 1 : true;
  return (
    <Carousel
      showIndicators={showNavs}
      renderArrowPrev={(clickHandler) => showNavs && (
        <ArrowPrev
          className="control-arrow control-prev"
          onClick={clickHandler}
        />
      )}
      renderArrowNext={(clickHandler) => showNavs && (
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
