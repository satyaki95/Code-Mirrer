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
        language: "cpp",
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
        language: "javascript",
        code: `console.log("Hello World")`,
      },
    ],
  },
];

export const defaultCodes = {
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
    localStorage.setItem("data", JSON.stringify(allFolders));
    setFolders(allFolders);
  };

  const deleteFolder = (folderId) => {
    const updatedFoldersList = folders.filter((folderItem) => {
      return folderItem.id !== folderId;
    });

    localStorage.setItem("data", JSON.stringify(updatedFoldersList));
    setFolders(updatedFoldersList);
  };

  const editFolderTitle = (folderId, newFolderName) => {
    const updatedFoldersList = folders.map((folderItem) => {
      if (folderItem.id === folderId) {
        folderItem.title = newFolderName;
      }
      return folderItem;
    });

    localStorage.setItem("data", JSON.stringify(updatedFoldersList));
    setFolders(updatedFoldersList);
  };

  const editFileTitle = (folderId, fileId, newFileName) => {
    const updatedFoldersList = folders.map((folderItem) => {
      if (folderItem.id === folderId) {
        folderItem.files.map((file) => {
          if (file.id === fileId) {
            file.title = newFileName;
          }
          return file;
        });
      }
      return folderItem;
    });

    localStorage.setItem("data", JSON.stringify(updatedFoldersList));
    setFolders(updatedFoldersList);
  };

  const deleteFile = (folderId, fileId) => {
    const updatedFoldersList = folders.map((folderItem) => {
      if (folderItem.id === folderId) {
        folderItem.files = folderItem.files.filter((file) => {
          return file.id !== fileId;
        });
      }
      return folderItem;
    });

    localStorage.setItem("data", JSON.stringify(updatedFoldersList));
    setFolders(updatedFoldersList);
  };

  const createPlayground = (folderId, file) => {
    const updatedFoldersList = folders.map((folderItem) => {
      if (folderItem.id === folderId) {
        folderItem.files.push(file);
      }
      return folderItem;
    });

    localStorage.setItem("data", JSON.stringify(updatedFoldersList));
    setFolders(updatedFoldersList);
  };

  const getDefaultCode = (fileId, folderId) => {
    for (let i = 0; i < folders.length; i++) {
      if (folders[i].id === folderId) {
        for (let j = 0; j < folders[i].files.length; j++) {
          const currentFile = folders[i].files[j];
          if (fileId === currentFile.id) {
            return currentFile.code;
          }
        }
      }
    }
  };

  const getLanguage = (fileId, folderId) => {
    for (let i = 0; i < folders.length; i++) {
      if (folders[i].id === folderId) {
        for (let j = 0; j < folders[i].files.length; j++) {
          const currentFile = folders[i].files[j];
          if (fileId === currentFile.id) {
            return currentFile.language;
          }
        }
      }
    }
  };

  const updateLanguage = (fileId, folderId, language) => {
    const newFolders = [...folders];
    for (let i = 0; i < newFolders.length; i++) {
      if (newFolders[i].id === folderId) {
        for (let j = 0; j < newFolders[i].files.length; j++) {
          const currentFile = newFolders[i].files[j];
          if (fileId === currentFile.id) {
            newFolders[i].files[j].code = defaultCodes[language];
            newFolders[i].files[j].language = language;
          }
        }
      }
    }
    localStorage.setItem("data", JSON.stringify(newFolders));
    setFolders(newFolders);
  };

  const saveCode = (fileId, folderId, newCode) => {
    const newFolders = [...folders];
    for (let i = 0; i < newFolders.length; i++) {
      if (newFolders[i].id === folderId) {
        for (let j = 0; j < newFolders[i].files.length; j++) {
          const currentFile = newFolders[i].files[j];
          if (fileId === currentFile.id) {
            newFolders[i].files[j].code = newCode;
          }
        }
      }
      localStorage.setItem("data", JSON.stringify(newFolders));
      setFolders(newFolders);
    }
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
    deleteFolder,
    editFolderTitle,
    editFileTitle,
    deleteFile,
    createPlayground,
    getDefaultCode,
    getLanguage,
    updateLanguage,
    saveCode,
  };

  return (
    <PlaygroundContext.Provider value={playgroundFeatures}>
      {children}
    </PlaygroundContext.Provider>
  );
};
