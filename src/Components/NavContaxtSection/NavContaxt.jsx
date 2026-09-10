import React, { createContext, useState } from 'react'


export const NavDataContaxt=createContext();
const NavContaxt = ({children}) => {

    const[OpenNav,SetNav]=useState(false);
    
  return (
    <div>
      <NavDataContaxt.Provider value={{OpenNav,SetNav}}>
        {children}
      </NavDataContaxt.Provider>
    </div>
  )
}

export default NavContaxt
