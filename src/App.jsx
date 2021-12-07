import React from 'react';
import { ThemeProvider } from 'styled-components';
// components
import Footer from './componets/Footer';
import Nav from './componets/Nav';
import Products from './componets/Products';
// style
import { GlobalStyle } from './Global.style';

const theme = {
  buttons: {
    menuButton: 'rgba(0, 0, 0, 0.05)',
    darkButton: 'rgba(23, 26, 31, 0.75)',
    lightButton: 'rgba(255, 255, 255, 0.75)',
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Nav />
    <Products />
    <Footer />
  </ThemeProvider>
);

export default App;
