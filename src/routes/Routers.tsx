import React from 'react';
import { home } from './variables';
import { Home } from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '_assets/shared/404/Page';

export const Routers: React.FC = () => (
  <Routes>
    <Route path={home} element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
