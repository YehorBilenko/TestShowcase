import React from 'react';
import { Layout } from 'layout/Layout';
import { Routers } from 'routes/Routers';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routers />
    </Layout>
  </BrowserRouter>
);

export { App };
