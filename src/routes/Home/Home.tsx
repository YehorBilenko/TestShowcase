import * as React from 'react';
import { games } from './utils';
import { Slider } from './components/Slider';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <Slider items={games} />
    </div>
  );
};
