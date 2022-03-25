import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [abas, setAbas] = useState(false)

    const mudarAbas = () => {
        if(abas) {
          setAbas(false)
          const bo = document.querySelector("#responsive-flex")
          bo.classList.remove("margin-left")
          bo.classList.add("margin-left2")
        } else {
          setAbas(true)
          const bo = document.querySelector("#responsive-flex")
          bo.classList.remove("margin-left2")
          bo.classList.add("margin-left")
        }
      }
  return <Context.Provider value={{abas, mudarAbas}}>{children}</Context.Provider>;
};
