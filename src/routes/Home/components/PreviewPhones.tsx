import './PreviewPhones.scss';
import React from 'react';
import gameImg1 from '_assets/images/example1.jpg';
import gameImg2 from '_assets/images/example2.jpg';
import gameImg3 from '_assets/images/example3.jpg';
import iphoneBoarderImg from '_assets/images/iphone-boarder.png';

export const PreviewPhones: React.FC = () => {
  return (
    <div className="preview-phones">
      <div className="phone">
        <img src={iphoneBoarderImg} alt="phone border" className="img" />
        <img src={gameImg2} alt="example2" className="img" />
      </div>
      <div className="phone">
        <img src={iphoneBoarderImg} alt="phone border" className="img" />
        <img src={gameImg1} alt="example1" className="img" />
      </div>
      <div className="phone">
        <img src={iphoneBoarderImg} alt="phone border" className="img" />
        <img src={gameImg3} alt="example3" className="img" />
      </div>
    </div>
  );
};
