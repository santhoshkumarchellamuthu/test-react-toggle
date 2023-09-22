import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const handlebtn = () => {
    setToggle(!toggle);
  };

  return (
    <Context.Provider value={{ toggle, handlebtn }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
