import React from 'react';
import TeslaLogo from '../../assets/logo.svg';
import Navlink from './nav/Navlink';

import { Navbar } from './styles/navStyle';

const Nav = () => (
  <Navbar>
    <img src={TeslaLogo} alt="logo" />
  </Navbar>
);

export default Nav;
