import { useContext } from "react";
import { Modal } from "../../Providers/Modals/Modal";
import "./index.scss";
import { RightComponent } from "./RightComponent";
import { modalConstants, ModalContext } from "../../Providers/ModalProvider";

export const HomeScreen = () => {
  const modalFeatures = useContext(ModalContext);
  const openCreatePlaygroundModal = () => {
    // open create playground modal
    modalFeatures.openModal(modalConstants.CREATE_PLAYGROUND);
  };
  return (
    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src="logo.png" />
          <h1>Code Desk</h1>
          <h2>Code.Compile.Debug</h2>
          <button onClick={openCreatePlaygroundModal}>
            <span class="material-icons">add</span>
            <span>Create Playground</span>
          </button>
        </div>
      </div>
      <RightComponent />
      <Modal />
    </div>
  );
};
