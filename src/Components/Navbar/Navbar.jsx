import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../Hooks/AppContextComponent";

const Navbar = () => {

  const { setNavbarHeight, handleScrollToSection, BASE_URL } = useContext(AppContext);
  const navbarRef = useRef(null);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const height = navbarRef.current.getBoundingClientRect().height;
      setNavbarHeight(height);
    };
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, [setNavbarHeight]);

  return (
    <div className="Navbar" ref={navbarRef}>
      <section className="iconName" onClick={() => handleScrollToSection('Header')}>
        <img src={`/noun-tree.png`} alt="logo" />
        <div className="name">
          <h2>Tierrabuena</h2>
          <p>Casa de campo</p>
        </div>
      </section>
      <nav>
        <span onClick={() => handleScrollToSection('secondIntro')}>Nosotros</span>
        <span onClick={() => handleScrollToSection('courses')}>Talleres</span>
        <span onClick={() => handleScrollToSection('Contact')}>Contacto</span>
      </nav>
    </div>
  );
};

export default Navbar;
