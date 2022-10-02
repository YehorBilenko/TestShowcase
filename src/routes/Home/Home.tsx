import './Home.scss';
import * as React from 'react';
import { games } from './utils';
import { AppContext } from 'App';
import { Slider } from './components/Slider';
import { MoreLinks } from '_assets/shared/MoreLinks';
import { ScrollButton } from '_assets/shared/ScrollButton';

export const Home: React.FC = () => {
  const { isClicked, toggleClicked } = React.useContext(AppContext);
  return (
    <div className="home">
      <div className={`content ${isClicked && 'active'}`}>
        <Slider items={games} />
        <div className="toggle-handler" onClick={() => toggleClicked()}>
          <ScrollButton />
        </div>
      </div>
      <div className="sub-content">
      <MoreLinks />
      </div>
    </div>
  );
};
