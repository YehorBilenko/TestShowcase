import React from 'react';
import { Home } from './Home';
import { Policy } from './Policy';
import { home, policy } from './variables';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '_assets/shared/404/Page';

export const Routers: React.FC = () => (
  <Routes>
    <Route path={home} element={<Home />} />
    <Route path={policy} element={<Policy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
