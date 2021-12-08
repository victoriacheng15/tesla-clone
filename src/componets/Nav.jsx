import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import TeslaLogo from '../assets/logo.svg';
// components
import Navlink from './nav/Navlink';
import Button from './button/Button';

// style
import {
  Navbar,
  Logo,
  MiddleNav,
  RightNav,
  MobileNav,
  Background,
} from './styles/navStyle';

const Nav = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(!show);
  };

  return (
    <Navbar>
      <div>
        <Logo>
          <a href="/">
            <img src={TeslaLogo} alt="logo" />
          </a>
        </Logo>
        <MiddleNav>
          <Navlink text="model s" />
          <Navlink text="model 3" />
          <Navlink text="model x" />
          <Navlink text="model y" />
          <Navlink text="cybertruck" />
          <Navlink text="powerwall" />
        </MiddleNav>
        <RightNav>
          <div>
            <Navlink text="shop" />
            <Navlink text="account" />
          </div>
          <Button text="menu" onClick={() => showMenu()} />
        </RightNav>
      </div>
      <Background show={show} />
      <MobileNav show={show}>
        <Button text={<CloseOutlined />} onClick={() => showMenu()} />
        <Navlink text="model s" />
        <Navlink text="model 3" />
        <Navlink text="model x" />
        <Navlink text="model y" />
        <Navlink text="existing inventory" />
        <Navlink text="used inventory" />
        <Navlink text="trade-in" />
        <Navlink text="test drive" />
        <Navlink text="powerwall" />
        <Navlink text="energy" />
        <Navlink text="commerical energy" />
        <Navlink text="utilities" />
        <Navlink text="charging" />
        <Navlink text="find us" />
        <Navlink text="support" />
        <Navlink text="inventor relations" />
        <Navlink text="shop" />
        <Navlink text="account" />
        <Navlink text="more" />
      </MobileNav>
    </Navbar>
  );
};
export default Nav;
