import React from 'react';
import { Layout } from 'antd';

import Home from './components/Home';
import Header from './components/Header';


function App() {
  return (
    <Layout>
      <Header />
      <Home />
    </Layout>
  );
}

export default App;
