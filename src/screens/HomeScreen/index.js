import "./index.scss";

export const HomeScreen = () => {
  return (
    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src="logo.png" />
          <h1>Code Desk</h1>
          <h2>Code.Compile.Debug</h2>
          <button>Create New Playground</button>
        </div>
      </div>
      <div className="right-container">
        <h1>right container</h1>
      </div>
    </div>
  );
};
