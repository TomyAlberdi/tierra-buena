import React, { createContext, useState } from 'react'

export const AppContext = createContext();

const AppContextComponent = ({ children }) => {

  const [navbarHeight, setNavbarHeight] = useState(0);

  const targetCoursesAmmount = 20;
  const targetPeopleAmmount = 150;

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const data = {
    targetCoursesAmmount,
    targetPeopleAmmount,
    navbarHeight,
    setNavbarHeight,
    handleScrollToSection,
  }

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )

}

export default AppContextComponent