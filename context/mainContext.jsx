import { createContext, useContext, useState } from "react";

const mainContext = createContext(undefined);

const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <mainContext.Provider
      value={{ user, setUser, isOpen, setIsOpen, showPopup, setShowPopup }}
    >
      {children}
    </mainContext.Provider>
  );
};

export const mainState = () => {
  const context = useContext(mainContext);
  if (!context) {
    throw new Error("authState must be used within a authContextProvider");
  }
  return context;
};

export default MainContextProvider;
