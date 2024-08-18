import React, { createContext } from 'react'

export const AppContext = createContext();

const AppContextComponent = ({ children }) => {

  const targetCoursesAmmount = 20;
  const targetPeopleAmmount = 150;

  const data = {
    targetCoursesAmmount,
    targetPeopleAmmount,
  }

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )

}

export default AppContextComponent