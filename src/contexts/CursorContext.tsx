import React, { useContext, createContext, useState } from "react";

interface CursorContextI {
  isHovering: string;
  setIsHovering: React.Dispatch<React.SetStateAction<string>>;
}
//@ts-ignore
const StateContext = createContext<CursorContextI>({});

//@ts-ignore
export const CursorContextProvider = ({ children }) => {
  const [isHovering, setIsHovering] = useState("Buy");

  return (
    <StateContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </StateContext.Provider>
  );
};

export const useCursorContext = () => useContext(StateContext);
