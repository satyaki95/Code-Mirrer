import "./createPlaygroundModal.scss";

export const CreatePlaygroundModal = () => {
  return (
    <div className="modal-container">
      <form className="modal-body">
        <span className="material-icons close">close</span>
        <h1>Create New Playground</h1>
        <div className="item">
          <p>Enter Folder Name</p>
          <input />
        </div>
        <div className="item">
          <p>Enter Card Name</p>
          <input />
        </div>
        <div className="item">
          <select>
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
          <button type="submit">Create Playground</button>
        </div>
      </form>
    </div>
  );
};
