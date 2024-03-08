import { useState } from "react";
import MyContext from "./Context";

const Provider = ({ children }) => {
  const [data, setData] = useState("Initial data");

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
