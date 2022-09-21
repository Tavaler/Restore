import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/layout/App";
import reportWebVitals from "./reportWebVitals";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
// import { StoreProvider } from "./App/context/StoreContext";
import { Provider } from "react-redux";
import { store } from "./App/store/configureStore";

export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // ลบ React.StrictMode ออกไป กันเบิ้ล
  <HistoryRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </HistoryRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
