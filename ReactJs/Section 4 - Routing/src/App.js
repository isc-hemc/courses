import React from 'react';
import Layout from './containers/Blog/Layout';
import { BrowserRouter } from 'react-router-dom';

const app = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default app;