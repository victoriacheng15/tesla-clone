import React from "react";
import { GithubOutlined } from "@ant-design/icons";
// style
import { FooterSection } from "./styles/FooterStyle";

const Footer = function () {
  return (
    <FooterSection>
      <p>Cloned by Victoria</p>
      <a href="https://github.com/victoriacheng15">
        <GithubOutlined />
      </a>
    </FooterSection>
  );
};

export default Footer;
