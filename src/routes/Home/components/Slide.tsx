import './Slide.scss';
import React from 'react';
import { PreviewPhones } from './PreviewPhones';
import { ReactComponent as AppstoreButtonIcon } from '_assets/images/appstore.svg';
import { ReactComponent as GooglestoreButtonIcon } from '_assets/images/googlestore.svg';

export const Slide: React.FC = () => {
  return (
    <div className="slide-item">
      <div className="left-info">
        <h1 className="title">Hooping Heads</h1>
        <p className="sub-title">17m+ DOWNLOADS</p>
        <ul className="store-buttons">
          <li className="li">
            <GooglestoreButtonIcon className="svg" />
          </li>
          <li className="li">
            <AppstoreButtonIcon className="svg" />
          </li>
        </ul>
      </div>
      <div className="right-info">
        <PreviewPhones />
      </div>
    </div>
  );
};
