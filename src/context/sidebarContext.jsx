import { createContext, useState } from "react";

export const sidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen((pre) => !pre);
  }

  return (
    <sidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </sidebarContext.Provider>
  );
};
