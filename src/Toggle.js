import React, { useContext } from "react";
import { Context } from "./ContextProvider";
import "./toggle.css";

const Toggle = () => {
  const { toggle, handlebtn } = useContext(Context);
  return (
    <div>
      <div className={toggle ? "light" : "dark"}></div>
      <button onClick={handlebtn}>{toggle ? "light" : "dark"}</button>
    </div>
  );
};

export default Toggle;
