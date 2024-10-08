import React, { useContext } from "react";
import { AppContext } from "../../Hooks/AppContextComponent";

const MobileNavbar = () => {

  const { BASE_URL } = useContext(AppContext);

  return (
    <section className="MobileNavbar">
      <div className="logo">
        <img src={`/noun-tree.png`} alt="logo" />
      </div>
      <div className="text">
        <h2>Tierrabuena</h2>
        <p>Casa de campo</p>
      </div>
    </section>
  );
};

export default MobileNavbar;
