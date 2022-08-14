import './Footer.scss';
import * as React from 'react';
import { ReactComponent as CopyrightIcon } from '_assets/images/icons/copyright.svg';

const Footer: React.FC = () => (
  <footer className="footer container">
    <div className="copyright">
      <CopyrightIcon />
      <p className="p">LightDev 2022</p>
    </div>
    <p>Policy</p>
  </footer>
);

export { Footer };
