import './MoreLinks.scss';
import * as React from 'react';
import { AppContext } from 'App';
import { Social } from 'layout/Header/Social';

const MoreLinks = () => {
    const { isClicked } = React.useContext(AppContext);
    return (
        <div className={`more-links ${!isClicked && 'active'}`}>
        <p className="p">More about us</p>
        <Social />
      </div>
    )
};

export { MoreLinks };
