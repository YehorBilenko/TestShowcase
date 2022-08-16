import './Page.scss';
import * as React from 'react';
import { home } from 'routes/variables';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Burger404Img } from '_assets/images/burger-404.svg';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const onClick = (): void => navigate(home);
  return (
    <div className="not-found">
      <Burger404Img className="svg" />
    </div>
  );
};

export { NotFound };
