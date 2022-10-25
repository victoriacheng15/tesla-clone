import React from "react";

import { ButtonStyle } from "./ButtonStyle";

const Button = ({ text, onClick }) => (
  <ButtonStyle type="button" onClick={onClick}>
    {text}
  </ButtonStyle>
);

export default Button;
