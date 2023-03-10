import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
