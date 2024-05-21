import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./app/App";
import { ThemProvider } from "./context/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemProvider>
    </React.StrictMode>
  </Provider>
);
