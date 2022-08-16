import './Footer.scss';
import * as React from 'react';
import { Social } from '../Header/Social';
import { policy, home } from 'routes/variables';
import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as CopyrightIcon } from '_assets/images/icons/copyright.svg';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === home;

  return (
    <footer className="footer container">
      <div className="more-links">
        <p className="p">More about us</p>
        <Social />
      </div>
      <div className="sub-info">
        <div className="copyright">
          <CopyrightIcon />
          <p className="p">LightDev 2022</p>
        </div>
        <Link className="policy-navlink" to={isHome ? policy : home}>
          {isHome ? 'Policy' : 'Home'}
        </Link>
      </div>
    </footer>
  );
};

export { Footer };
