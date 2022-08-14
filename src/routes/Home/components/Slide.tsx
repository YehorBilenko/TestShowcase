import './Slide.scss';
import React from 'react';
import { PreviewPhones } from './PreviewPhones';
import { ReactComponent as AppstoreButtonIcon } from '_assets/images/appstore.svg';

export const Slide: React.FC = () => {
  return (
    <div className="slide-item">
      <div className="left-info">
        <h1 className="title">Hooping Heads</h1>
        <p className="sub-title">17m+ DOWNLOADS</p>
        <ul className="store-buttons">
          <li className="li">
            <AppstoreButtonIcon />
          </li>
          <li className="li">
            <AppstoreButtonIcon />
          </li>
        </ul>
      </div>
      <div className="right-info">
        <PreviewPhones />
      </div>
    </div>
  );
};
