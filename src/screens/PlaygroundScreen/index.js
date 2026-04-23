import { useParams } from "react-router-dom";
import "./index.scss";

export const PlaygroundScreen = () => {
  const params = useParams();
  const { fileId, folderId } = params;

  return (
    <div className="playground-container">
      <div className="header-container">
        <img src="/logo.png" className="logo" />
      </div>
      <div className="content-container">
        <div className="editor-container">Editor Container</div>
        <div className="input-container">Input Container</div>
        <div className="output-container">Output Container</div>
      </div>
    </div>
  );
};
