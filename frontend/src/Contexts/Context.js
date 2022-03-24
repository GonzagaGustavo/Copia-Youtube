import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [abas, setAbas] = useState(false)

    const mudarAbas = () => {
        if(abas) {
          setAbas(false)
        } else {
          setAbas(true)
        }
      }
  return <Context.Provider value={{abas, mudarAbas}}>{children}</Context.Provider>;
};
