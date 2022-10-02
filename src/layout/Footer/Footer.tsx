import './Footer.scss';
import * as React from 'react';
import { AppContext } from 'App';
import { policy, home } from 'routes/variables';
import { useLocation, Link } from 'react-router-dom';
import { MoreLinks } from '_assets/shared/MoreLinks';
import { ReactComponent as CopyrightIcon } from '_assets/images/icons/copyright.svg';

const Footer: React.FC = () => {
  const { toggleClicked } = React.useContext(AppContext);
  const location = useLocation();
  const isHome = location.pathname === home;
  const onNavlinkClick = () => {
    if(isHome) {
      toggleClicked(false)
    }
  }
  return (
    <footer className="footer container">
      {isHome && (
        <div className="links">
          <MoreLinks />
        </div>
      )}
      <div className="sub-info">
        <div className="copyright">
          <CopyrightIcon />
          <p className="p">LightDev 2022</p>
        </div>
        <Link className="policy-navlink" to={isHome ? policy : home} onClick={onNavlinkClick}>
          {isHome ? 'Policy' : 'Home'}
        </Link>
      </div>
    </footer>
  );
};

export { Footer };
