import React from 'react';
import styled from 'styled-components';
// components
import Product from './product/Product';

const Products = function () {
  return (
    <Main>
      <Product
        bgImage="model-s.jpg"
        title="model s"
        descrption="Order Online for"
        link="Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        arrow
      />
      <Product
        bgImage="model-y.jpg"
        title="model y"
        descrption="Order Online for"
        link="Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Product
        bgImage="model-x.jpg"
        title="model x"
        descrption="Order Online for"
        link="Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Product
        bgImage="model-3.jpg"
        title="model 3"
        descrption="Order Online for"
        link="Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Product
        bgImage="solar-panel.jpg"
        title="solar and powerwall"
        descrption="Power Everything"
        leftBtnText="learn more"
      />
      <Product
        bgImage="accessories.jpg"
        title="accessories"
        leftBtnText="shop now"
      />
    </Main>
  );
};

export default Products;

const Main = styled.main``;
