import "./editorContainer.scss";
import Editor from "@monaco-editor/react";

const editorOption = {
  fontSize: 18,
  wordWraap: "on",
};

export const EditorContainer = () => {
  const onChangeCode = (newCode) => {
    
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
          <select>
            <option value="cpp">cpp</option>
            <option value="java">java</option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>

          <select>
            <option value="vs-dark">Vs-Dark</option>
            <option value="vs-light">Vs-Light</option>
          </select>
        </div>
      </div>
      <div className="editor-body">
        <Editor
          height={"100%"}
          language={"javascript"}
          options={editorOption}
          theme={"vs-dark"}
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
        <input type="file" id="import-code" />
        <button className="btn">
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
