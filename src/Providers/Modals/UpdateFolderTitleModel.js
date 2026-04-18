import "./createPlaygroundModal.scss";
import "./createFolderModel.scss";
import { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";

export const UpdateFolderTitleModel = () => {
  const { closeModal, modalPayload } = useContext(ModalContext);
  const { editFolderTitle } = useContext(PlaygroundContext);
  const onSubmitModal = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    editFolderTitle(modalPayload, folderName);
    closeModal();
  };
  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-icons close">
          close
        </span>
        <h1>Update Folder Title</h1>
        <div className="input-container">
          <input name="folderName" placeholder="Enter Folder Name" required />
          <button type="submit">Update Folder</button>
        </div>
      </form>
    </div>
  );
};
