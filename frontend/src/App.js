import "./App.css";
import Header from "./components/Header/Header.js";
import pinktulips from "./assets/pinktulips.jpg";

function App() {
  const onClickIcon = (title) => {
    console.log("header item clicked is", title);
  };

  return (
    <div className="App">
      <Header logo={pinktulips} onIcon={onClickIcon} />
    </div>
  );
}

export default App;
