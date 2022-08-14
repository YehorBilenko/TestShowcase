import './Header.scss';
import * as React from 'react';
import logoImg from '_assets/images/logo.png';
import { Social } from './Social';

const Header: React.FC = () => (
  <header className="header container">
    <div className="logo">
      <img src={logoImg} alt="Logo" className="logo__img" />
    </div>
    <div className="social">
      <p className="p">More our games</p>
      <Social />
    </div>
  </header>
);

export { Header };
