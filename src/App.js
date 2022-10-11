import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './Hero';
import Products from './Products';
import { productData, productDataTwo } from './Products/data';
import Feature from './Feature';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='BEST DEALS IN TOWN'
       data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;