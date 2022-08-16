import './Layout.scss';
import * as React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { ILayoutProps } from './interface';

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
