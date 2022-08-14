import './Layout.scss';
import * as React from 'react';
// import backgroundImg from '_assets/images/background.svg';
import { ILayoutProps } from './interface';

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      {/* <img src={backgroundImg} alt="" /> */}
      <header>Header</header>
      {children}
      <footer className="footer">footer</footer>
    </>
  );
};

export { Layout };
