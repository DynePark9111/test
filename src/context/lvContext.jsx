import { createContext, useEffect, useState } from "react";

export const lvContext = createContext();

export const LvContextProvider = ({ children }) => {
  const getLocal = () => {
    const local = localStorage.getItem("isLv8");
    return local ? JSON.parse(local) : true;
  };

  const [isLv8, setIsLv8] = useState(getLocal());

  function toggleLv8() {
    setIsLv8((pre) => !pre);
  }

  useEffect(() => {
    localStorage.setItem("isLv8", JSON.stringify(isLv8));
  }, [isLv8]);

  return (
    <lvContext.Provider value={{ isLv8, toggleLv8 }}>
      {children}
    </lvContext.Provider>
  );
};
