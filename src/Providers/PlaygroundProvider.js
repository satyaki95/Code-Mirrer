import { createContext, useEffect, useState } from "react";
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

const defaultCodes = {
  cpp: `#include <bits/stdc++.h>`,
  java: `public class Main {
    public static void main(String[] args) {
      System.out.println("Hello, World");
    }
  }`,
  javascript: `console.log("Hello, World");`,
  python: `print("Hello, World")`,
};

export const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(() => {
    const localData = localStorage.getItem("data");
    if (localData) {
      return JSON.parse(localData);
    }
    return intialdata;
  });

  const createNewPlayground = (newPlayground) => {
    const { folderName, fileName, language } = newPlayground;
    const newFolders = [...folders];
    newFolders.push({
      id: uuidv4(),
      title: folderName,
      files: [
        {
          id: uuidv4(),
          title: fileName,
          code: defaultCodes[language],
          language: language,
        },
      ],
    });
    localStorage.setItem("data", JSON.stringify(newFolders));
    setFolders(newFolders);
  };

  const createNewFolder = (folderName) => {
    const newFolder = {
      id: uuidv4(),
      title: folderName,
      files: [],
    };

    const allFolders = [...folders, newFolder];
    folders.push(newFolder);
    localStorage.setItem("data", allFolders);
    setFolders(allFolders);
  };

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(folders));
    }
  }, []);

  const playgroundFeatures = {
    folders,
    createNewPlayground,
    createNewFolder,
  };

  return (
    <PlaygroundContext.Provider value={playgroundFeatures}>
      {children}
    </PlaygroundContext.Provider>
  );
};
