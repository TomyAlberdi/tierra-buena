import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <section className="footerTop">
        <div className="logo">
          <img src="/noun-tree.png" alt="logo" />
          <div>
            <h4>Tierra Buena</h4>
            <p>Casa de campo</p>
          </div>
        </div>
        <div className="socialMedia">
          <a href="" target="_blank">
            <BiLogoInstagramAlt />
          </a>
        </div>
      </section>
      <section className="footerBottom">
        <p>Copyright 2024 - Tierra Buena SA. Todos los derechos reservados.</p>
        <p>tierrabuenacasadecampo@gmail.com</p>
      </section>
    </footer>
  );
};

export default Footer;
