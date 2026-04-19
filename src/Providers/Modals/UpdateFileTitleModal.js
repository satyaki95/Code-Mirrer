import "./createPlaygroundModal.scss";
import "./createFolderModel.scss";
import { PlaygroundContext } from "../PlaygroundProvider";
import { useContext } from "react";
import { ModalContext } from "../ModalProvider";

export const UpdateFileTitleModal = () => {
  const { closeModal, modalPayload } = useContext(ModalContext);
  const { editFileTitle } = useContext(PlaygroundContext);

  const onSubmitModal = (e) => {
    e.preventDefault();
    const fileName = e.target.fileName.value;
    editFileTitle(modalPayload.folderId, modalPayload.fileId, fileName);
    closeModal();
  };
  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-icons close">
          close
        </span>
        <h1>Update Card Title</h1>
        <div className="input-container">
          <input name="fileName" placeholder="Enter Card Name" required />
          <button type="submit">Update Card</button>
        </div>
      </form>
    </div>
  );
};
