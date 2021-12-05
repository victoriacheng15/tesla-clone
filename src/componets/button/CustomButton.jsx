import React from 'react';

import { Button } from './custombButtonStyle';

const CustomButton = ({ text }) => (
  <Button type="button">
    {text}
  </Button>
);

export default CustomButton;
