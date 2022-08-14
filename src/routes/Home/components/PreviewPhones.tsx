import './PreviewPhones.scss';
import React from 'react';
import gameImg from '_assets/images/example1.jpg';
import iphoneBoarderImg from '_assets/images/iphone-boarder.png';

export const PreviewPhones: React.FC = () => {
  return (
    <div className="preview-phones">
      <div className="phone">
        <img src={iphoneBoarderImg} alt="phone border" className="img" />
        <img src={gameImg} alt="example1" className="img" />
      </div>
      <div className="phone">
        <img src={iphoneBoarderImg} alt="phone border" className="img" />
        <img src={gameImg} alt="example1" className="img" />
      </div>
      <div className="phone">
        <img src={iphoneBoarderImg} alt="phone border" className="img" />
        <img src={gameImg} alt="example1" className="img" />
      </div>
    </div>
  );
};
