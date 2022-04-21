import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import App from './App';
import reportWebVitals from './reportWebVitals';
import data from './static/data.json';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>{data.name}</title>
      <meta name="description" content={`Resume of ${data.name}`} />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
