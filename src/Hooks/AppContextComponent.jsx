import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextComponent = ({ children }) => {

  const [navbarHeight, setNavbarHeight] = useState(0);

  const BASE_URL = "/tierra-buena/";

  const targetCoursesAmmount = 30;
  const targetPeopleAmmount = 200;

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const data = {
    targetCoursesAmmount,
    targetPeopleAmmount,
    navbarHeight,
    setNavbarHeight,
    handleScrollToSection,
    BASE_URL,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContextComponent;
