import { useContext } from "react";
import "./index.scss";
import { PlaygroundContext } from "../../../Providers/PlaygroundProvider";
import { modalConstants, ModalContext } from "../../../Providers/ModalProvider";

const Folder = ({ folderTitle, cards, id }) => {
  const { deleteFolder } = useContext(PlaygroundContext);
  const { openModal, setModalPayload } = useContext(ModalContext);

  const onDeleteFolder = () => {
    deleteFolder(id);
  };

  const onEditFolderTitle = () => {
    // open update folder title modal
    setModalPayload(id);
    openModal(modalConstants.UPDATE_FOLDER_TITLE);
  };

  return (
    <div className="folder-container">
      <div className="folder-header">
        <div className="folder-header-item">
          <span className="material-icons folder">folder</span>
          <span>{folderTitle}</span>
        </div>
        <div className="folder-header-item">
          <span className="material-icons delete" onClick={onDeleteFolder}>
            delete
          </span>
          <span className="material-icons edit" onClick={onEditFolderTitle}>
            edit
          </span>
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
                <span>Language: {file?.language}</span>
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
  const modalFeatures = useContext(ModalContext);

  const openCreateNewFolderModal = () => {
    modalFeatures.openModal(modalConstants.CREATE_FOLDER);
  };

  return (
    <div className="right-container">
      <div className="header">
        <div className="title">
          <span>My</span> Playground
        </div>
        <button className="add-folder" onClick={openCreateNewFolderModal}>
          <span className="material-icons add">add</span>
          <span>New Folder</span>
        </button>
      </div>
      {folders?.map((folder, index) => {
        return (
          <Folder
            folderTitle={folder?.title}
            cards={folder?.files}
            key={folder.id}
            id={folder.id}
          />
        );
      })}
    </div>
  );
};
