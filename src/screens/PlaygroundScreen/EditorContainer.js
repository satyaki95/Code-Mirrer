import { useRef, useState } from "react";
import "./editorContainer.scss";
import Editor from "@monaco-editor/react";

const editorOption = {
  fontSize: 18,
  wordWraap: "on",
};

const fileExtensionMapping = {
  cpp: "cpp",
  javascript: "js",
  python: "py",
  java: "java",
};

export const EditorContainer = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [theme, setTheme] = useState("vs-dark");
  const codeRef = useRef();

  const onChangeCode = (newCode) => {
    codeRef.current = newCode;
  };

  const importCode = (event) => {
    const file = event.target.files[0];
    const fileType = file.type.includes("text");
    if (fileType) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = function (value) {
        const importedCode = value.target.result;
        setCode(importedCode);
        codeRef.current = importedCode;
      };
    } else {
      alert("Please Choose a Program File");
    }
  };

  const exportCode = () => {
    const codeValue = codeRef.current?.trim();
    if (!codeValue) {
      alert("Please type some code in the editor before exporting");
    }
    //Create a blob / instant file in the memory
    else {
      const codeBlob = new Blob([codeValue], { type: "text/plain" });
      const downloadUrl = URL.createObjectURL(codeBlob);

      const link = document.createElement("a");
      link.href = downloadUrl;

      link.download = `code.${fileExtensionMapping[language]}`;
      link.click();
    }
  };

  const onChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const onChangeTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="root-editor-container">
      <div className="editor-header">
        <div className="editor-left-container">
          <b className="title">{"Title"}</b>
          <span className="material-icons">edit</span>
          <button>Save Code</button>
        </div>
        <div className="editor-right-container">
          <select onChange={onChangeLanguage} value={language}>
            <option value="cpp">cpp</option>
            <option value="java">java</option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>

          <select onChange={onChangeTheme} value={theme}>
            <option value="vs-dark">Vs-Dark</option>
            <option value="vs-light">Vs-Light</option>
          </select>
        </div>
      </div>
      <div className="editor-body">
        <Editor
          height={"100%"}
          language={language}
          options={editorOption}
          theme={theme}
          value={code}
          onChange={onChangeCode}
        />
      </div>
      <div className="editor-footer">
        <button className="btn">
          <span className="material-icons">fullscreen</span>
          <span>Full Screen</span>
        </button>
        <label htmlFor="import-code" className="btn">
          <span className="material-icons">cloud_upload</span>
          <span>Import Code</span>
        </label>
        <input type="file" id="import-code" onChange={importCode} />
        <button className="btn" onClick={exportCode}>
          <span className="material-icons">cloud_download</span>
          <span>Export Code</span>
        </button>
        <button className="run-code btn">
          <span className="material-icons">play_arrow</span>
          <span>Run Code</span>
        </button>
      </div>
    </div>
  );
};
