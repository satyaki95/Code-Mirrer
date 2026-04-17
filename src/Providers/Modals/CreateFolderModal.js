import { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import "./createFolderModel.scss";
import "./createPlaygroundModal.scss";
import { PlaygroundContext } from "../PlaygroundProvider";

export const CreateFolderModal = () => {
  const modalFeatures = useContext(ModalContext);
  const { createNewFolder } = useContext(PlaygroundContext);

  const closeModal = () => {
    modalFeatures.closeModal();
  };

  const onSubmitModal = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    createNewFolder(folderName);
    closeModal();
  };
  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <span className="material-icons close" onClick={closeModal}>
          close
        </span>
        <h1>Create New Folder</h1>
        <div className="input-container">
          <input name="folderName" placeholder="Enter Folder Name" />
          <button type="submit">Create Folder</button>
        </div>
      </form>
    </div>
  );
};
