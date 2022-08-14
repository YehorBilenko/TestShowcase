import './index.scss';
import '_assets/fonts/lato/Lato-Black.ttf';
import '_assets/fonts/jost/Jost-Regular.ttf';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
