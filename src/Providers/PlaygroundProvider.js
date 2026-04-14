import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const PlaygroundContext = createContext();

const intialdata = [
  {
    id: uuidv4(),
    title: "Spring Boot",
    files: [
      {
        id: uuidv4(),
        title: "index",
        langauge: "cpp",
        code: `#include <bits/stdc++.h>`,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Frontend",
    files: [
      {
        id: uuidv4(),
        title: "test",
        langauge: "javascript",
        code: `console.log("Hello World")`,
      },
    ],
  },
];
export const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(intialdata);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(folders));
  }, []);

  return (
    <PlaygroundContext.Provider value={folders}>
      {children}
    </PlaygroundContext.Provider>
  );
};
