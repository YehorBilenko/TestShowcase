import './Header.scss';
import * as React from 'react';
import logoImg from '_assets/images/logo.png';
import { Social } from './Social';
import { home } from 'routes/variables';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const onClick = (): void => navigate(home);
  return (
    <header className="header container">
      <div className="logo" onClick={onClick}>
        <img src={logoImg} alt="Logo" className="logo__img" />
      </div>
      <div className="social">
        <p className="p">More about us</p>
        <Social />
      </div>
    </header>
  );
};

export { Header };
