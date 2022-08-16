import './PreviewPhones.scss';
import React from 'react';
import iphoneBoarderImg from '_assets/images/iphone-boarder.png';
import { IPreviewPhones } from '../interfaces';

export const PreviewPhones: React.FC<IPreviewPhones> = ({ links }) => {
  return (
    <div className="preview-phones">
      {links.map((link, i) => (
        <div className="phone" key={i}>
          <img src={iphoneBoarderImg} alt="phone border" className="img" />
          <img src={link} alt={`example${i}`} className="img" />
        </div>
      ))}
    </div>
  );
};
