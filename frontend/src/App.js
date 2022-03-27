import "./App.css";
import Header from "./components/Header/Header.js";
import pinktulips from "./assets/pinktulips.jpg";
import styled, { ThemeProvider } from "styled-components";
import {
  Route,
  Routes,
  useNavigate,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import HomePage from "./containers/home/HomePage.js";
import About from "./containers/about/About.js";
import Products from "./containers/products/Products";
import Services from "./containers/services/Services";
import Contact from "./containers/contact/Contact";
import SignUp from "./containers/signUp/SignUp";

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
      <BrowserRouter>
        <div className="App">
          <Header logo={pinktulips} onIcon={onClickIcon} />
          <Routes>
            <Route path="/home" exact={true} element={<HomePage />} />
            <Route path="/about" exact={true} element={<About />} />
            <Route path="/services" exact={true} element={<Services />} />
            <Route path="/contactUs" exact={true} element={<Contact />} />
            <Route path="/products" exact={true} element={<Products />} />
            <Route path="/signUp" exact={true} element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
