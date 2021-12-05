import React from 'react';
import TeslaLogo from '../../assets/logo.svg';
import Navlink from './nav/Navlink';
import CustomButton from './button/CustomButton';

import { Navbar, Logo, Ulgroup } from './styles/navStyle';

const Nav = () => (
  <Navbar>
    <Logo>
      <img src={TeslaLogo} alt="logo" />
    </Logo>
    <Ulgroup>
      <Navlink text="text" />
      <Navlink text="text" />
      <Navlink text="text" />
      <Navlink text="text" />
      <Navlink text="text" />
      <Navlink text="text" />
    </Ulgroup>
    <CustomButton text="menu" />
  </Navbar>
);

export default Nav;
