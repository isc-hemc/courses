import React from 'react';
import BurgerBuilder from '@/containers/BurgerBuilder/BurgerBuilder'
import Layout from '@/components/Layout/Layout';

const app = () => {
  return (
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
  );
};

export default app;
