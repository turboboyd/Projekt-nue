import { render } from "react-dom";
import App from "./App";
import "./Normalize.scss";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
