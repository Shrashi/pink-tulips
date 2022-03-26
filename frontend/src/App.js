import "./App.css";
import Header from "./components/Header/Header.js";
import pinktulips from "./assets/pinktulips.jpg";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  background: {
    primary: "#d72631",
    secondary: " #a2d5c6",
  },
  color: {
    primary: "#ffffff",
    secondary: "#000",
  },
};
function App() {
  const onClickIcon = (title) => {
    console.log("header item clicked is", title);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header logo={pinktulips} onIcon={onClickIcon} />
      </div>
    </ThemeProvider>
  );
}

export default App;
