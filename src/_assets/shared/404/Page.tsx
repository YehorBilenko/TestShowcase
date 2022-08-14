import './Page.scss';
import * as React from 'react';
import { home } from 'routes/variables';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const onClick = (): void => navigate(home);
  return (
    <div className="error-page">
      <div className="error-page-head">{'404'}</div>
      <div className="error-page-title">
        <p>{'Sorry! Page not found'}</p>
      </div>
      <button className="error-page-btn" onClick={onClick}>
        {'Back to home'}
      </button>
    </div>
  );
};

export { NotFound };
