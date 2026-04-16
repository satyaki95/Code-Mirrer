import { useContext } from "react";
import "./index.scss";
import { PlaygroundContext } from "../../../Providers/PlaygroundProvider";

const Folder = ({ folderTitle, cards }) => {
  return (
    <div className="folder-container">
      <div className="folder-header">
        <div className="folder-header-item">
          <span className="material-icons folder">folder</span>
          <span>{folderTitle}</span>
        </div>
        <div className="folder-header-item">
          <span className="material-icons delete">delete</span>
          <span className="material-icons edit">edit</span>
          <button>
            <span className="material-icons add">add</span>
            <span>New Playground</span>
          </button>
        </div>
      </div>
      <div className="cards-container">
        {cards?.map((file, index) => {
          return (
            <div className="card" key={index}>
              <img src="logo-small.png" />
              <div className="title-container">
                <span>{file?.title}</span>
                <span>Language: {file?.langauge}</span>
              </div>
              <div className="title-container-icons">
                <span className="material-icons delete">delete</span>
                <span className="material-icons edit">edit</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const RightComponent = () => {
  const { folders } = useContext(PlaygroundContext);

  return (
    <div className="right-container">
      <div className="header">
        <div className="title">
          <span>My</span> Playground
        </div>
        <button className="add-folder">
          <span className="material-icons add">add</span>
          <span>New Folder</span>
        </button>
      </div>
      {folders?.map((folder, index) => {
        return (
          <Folder
            folderTitle={folder?.title}
            cards={folder?.files}
            key={index}
          />
        );
      })}
    </div>
  );
};
