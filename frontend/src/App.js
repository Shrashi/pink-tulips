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
import { Provider } from "react-redux";

import HomePage from "./containers/home/HomePage.js";
import About from "./containers/about/About.js";
import Products from "./containers/products/Products";
import Services from "./containers/services/Services";
import Contact from "./containers/contact/Contact";
import SignUp from "./containers/signUp/SignUp";
import store from "./redux/store";

const theme = {
  background: {
    primary: "#d72631",
    secondary: " #a2d5c6",
  },
  color: {
    primary: "#fff",
    secondary: "#000",
  },
};
function App() {
  const onClickIcon = (title) => {};

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Header logo={pinktulips} onIcon={onClickIcon} />
            <Routes>
              <Route path="/home" exact element={<HomePage />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/services" exact element={<Services />} />
              <Route path="/contactUs" exact element={<Contact />} />
              <Route path="/products" exact element={<Products />} />
              <Route path="/signUp" exact element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
