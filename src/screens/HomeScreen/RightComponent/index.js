import "./index.scss";

export const RightComponent = () => {
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
      <div className="folder-container">
        <div className="folder-header">
          <div className="folder-header-item">
            <span className="material-icons folder">folder</span>
            <span>{"DSA"}</span>
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
          <div className="card">
            <img src="logo-small.png" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"JavaScript"}</span>
            </div>
            <div className="title-container-icons">
              <span className="material-icons delete">delete</span>
              <span className="material-icons edit">edit</span>
            </div>
          </div>
          <div className="card">
            <img src="logo-small.png" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"JavaScript"}</span>
            </div>
            <div className="title-container-icons">
              <span className="material-icons delete">delete</span>
              <span className="material-icons edit">edit</span>
            </div>
          </div>
          <div className="card">
            <img src="logo-small.png" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"JavaScript"}</span>
            </div>
            <div className="title-container-icons">
              <span className="material-icons delete">delete</span>
              <span className="material-icons edit">edit</span>
            </div>
          </div>
          <div className="card">
            <img src="logo-small.png" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"JavaScript"}</span>
            </div>
            <div className="title-container-icons">
              <span className="material-icons delete">delete</span>
              <span className="material-icons edit">edit</span>
            </div>
          </div>
        </div>
      </div>
       <div className="folder-container">
        <div className="folder-header">
          <div className="folder-header-item">
            <span className="material-icons folder">folder</span>
            <span>{"Full-Stack"}</span>
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
          <div className="card">
            <img src="logo-small.png" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"JavaScript"}</span>
            </div>
            <div className="title-container-icons">
              <span className="material-icons delete">delete</span>
              <span className="material-icons edit">edit</span>
            </div>
          </div>
          <div className="card">
            <img src="logo-small.png" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"JavaScript"}</span>
            </div>
            <div className="title-container-icons">
              <span className="material-icons delete">delete</span>
              <span className="material-icons edit">edit</span>
            </div>
          </div>
          <div className="card">
            <img src="logo-small.png" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"JavaScript"}</span>
            </div>
            <div className="title-container-icons">
              <span className="material-icons delete">delete</span>
              <span className="material-icons edit">edit</span>
            </div>
          </div>
          <div className="card">
            <img src="logo-small.png" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"JavaScript"}</span>
            </div>
            <div className="title-container-icons">
              <span className="material-icons delete">delete</span>
              <span className="material-icons edit">edit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
