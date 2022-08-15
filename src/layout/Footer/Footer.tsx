import './Footer.scss';
import * as React from 'react';
import { Social } from '../Header/Social';
import { ReactComponent as CopyrightIcon } from '_assets/images/icons/copyright.svg';

const Footer: React.FC = () => (
  <footer className="footer container">
    <div className="more-links">
      <p className="p">More our games</p>
      <Social />
    </div>
    <div className="sub-info">
      <div className="copyright">
        <CopyrightIcon />
        <p className="p">LightDev 2022</p>
      </div>
      <p>Policy</p>
    </div>
  </footer>
);

export { Footer };
