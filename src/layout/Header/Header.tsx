import './Header.scss';
import * as React from 'react';
import logoImg from '_assets/images/logo.png';
import { AppContext } from 'App'
import { Social } from './Social';
import { policy, home } from 'routes/variables';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { toggleClicked } = React.useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isPolicy = location.pathname === policy;
  const onClick = (): void => navigate(home);
  return (
    <header onClick={() => toggleClicked(false)} className={`header ${isPolicy ? 'container-mobile' : 'container'}`}>
      <div className="logo" onClick={onClick}>
        <img src={logoImg} alt="Logo" className="logo__img" />
      </div>
      {!isPolicy && (
        <div className="social">
        <p className="p">More about us</p>
        <Social />
      </div>
      )}
    </header>
  );
};

export { Header };
