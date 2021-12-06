import React from 'react';
import TeslaLogo from '../../assets/logo.svg';
import Navlink from './nav/Navlink';
import MenuButton from './button/MenuButton';

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
    <MenuButton text="menu" />
  </Navbar>
);

export default Nav;
