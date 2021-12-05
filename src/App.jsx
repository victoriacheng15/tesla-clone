import React from 'react';
import Footer from './componets/Footer';
import Nav from './componets/Nav';
import Products from './componets/Products';
import { GlobalStyle } from './Global.style';

const App = () => (
  <>
    <GlobalStyle />
    <Nav />
    <Products />
    <Footer />
  </>
);

export default App;
