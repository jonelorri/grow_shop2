import React, { useState } from 'react';
import { createContext } from 'react';

export const CurrentAccount = createContext();

const Context = ({ children }) => { 
  const [currentAccount, setCurrentAccount] = useState([]);

  return (
    <CurrentAccount.Provider value={{ currentAccount, setCurrentAccount }}>{children}</CurrentAccount.Provider>
  )
};

export default Context;