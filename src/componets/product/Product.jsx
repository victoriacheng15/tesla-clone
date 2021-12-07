import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import Button from '../button/Button';
// style
import { Section, ButtonsGroup, Arrow } from './productStyle';

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
        <Button text={leftBtnText} />
        {rightBtnText && <Button text={rightBtnText} />}
      </ButtonsGroup>
      <Arrow>{arrow && <DownOutlined />}</Arrow>
    </div>
  </Section>
);

export default Product;
