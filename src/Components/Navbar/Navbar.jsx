import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <section className="iconName">
        <img src="/noun-tree.png" alt="logo" />
        <div className="name">
          <h2>Tierra Buena</h2>
          <p>Casa de campo</p>
        </div>
      </section>
      <nav>
        <span>Nosotros</span>
        <span>Cursos</span>
        <span>Ubicación</span>
        <span>Contacto</span>
      </nav>
    </div>
  );
};

export default Navbar;
