import './Slide.scss';
import React from 'react';
import { ISlide } from '../interfaces';
import { PreviewPhones } from './PreviewPhones';
import { ReactComponent as AppstoreButtonIcon } from '_assets/images/appstore.svg';
import { ReactComponent as GooglestoreButtonIcon } from '_assets/images/googlestore.svg';

export const Slide: React.FC<ISlide> = ({
  title,
  subTitle,
  googleStoreLink,
  appStoreLink,
  media,
}) => {
  return (
    <div className="slide-item container">
      <div className="left-info">
        <h1 className="title">{title}</h1>
        <p className="sub-title">{subTitle}</p>
        <ul className="store-buttons">
          <li className="li">
            <a href={googleStoreLink}>
              <GooglestoreButtonIcon className="svg" />
            </a>
          </li>
          <li className="li">
            <a href={appStoreLink}>
              <AppstoreButtonIcon className="svg" />
            </a>
          </li>
        </ul>
      </div>
      <div className="right-info">
        <PreviewPhones links={media} />
      </div>
    </div>
  );
};
