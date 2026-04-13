import { createContext, useContext } from "react";

const PlaygroundContext = createContext();
export const PlaygroundProvider = ({ children }) => {
  return (
    <PlaygroundContext.Provider value={{}}>
      {children}
    </PlaygroundContext.Provider>
  );
};
