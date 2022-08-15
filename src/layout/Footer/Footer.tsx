import './Footer.scss';
import * as React from 'react';
import { Social } from '../Header/Social';
import { policy, home } from 'routes/variables';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ReactComponent as CopyrightIcon } from '_assets/images/icons/copyright.svg';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const onClick = (): void => navigate(isHome ? policy : home);

  return (
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
        <Link to={isHome ? policy : home}>{isHome ? 'Policy' : 'Home'}</Link>
      </div>
    </footer>
  );
};

export { Footer };
