import React from 'react';
import Fade from 'react-reveal/Fade';
import { DownOutlined } from '@ant-design/icons';
// import arrowDown from '../../../assets/down-arrow.svg';
// style
import {
  Section,
  ButtonsGroup,
  LeftBtn,
  RightBtn,
  Arrow,
} from './productStyle';

const Product = ({
  bgImage,
  title,
  link,
  descrption,
  leftBtnText,
  rightBtnText,
  arrow,
}) => (
  <Section bgImage={bgImage}>
    <Fade bottom>
      <div>
        <h2>{title}</h2>
        {link ? (
          <p>
            {descrption}
            <a href="/something">{link}</a>
          </p>
        ) : (
          <p>{descrption}</p>
        )}
      </div>
      <div>
        <ButtonsGroup>
          <LeftBtn>{leftBtnText}</LeftBtn>
          {rightBtnText && <RightBtn>{rightBtnText}</RightBtn>}
        </ButtonsGroup>
        <Arrow>{arrow && <DownOutlined />}</Arrow>
      </div>
    </Fade>
  </Section>
);

export default Product;
