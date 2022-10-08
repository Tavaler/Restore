import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/layout/App";
import reportWebVitals from "./reportWebVitals";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
<<<<<<< HEAD
// import { StoreProvider } from "./App/context/StoreContext";
import { Provider } from "react-redux";
import { store } from "./App/store/configureStore";
=======
import { store } from "./App/store/configureStore";
import { Provider } from "react-redux";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
import { fetchProductsAsync } from "./features/catalog/catalogSlice";

export const history = createBrowserHistory({ window });
console.log(store.getState())
store.dispatch(fetchProductsAsync())

console.log(store.getState())
store.dispatch(fetchProductsAsync())


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // ลบ React.StrictMode ออกไป กันเบิ้ล
  <HistoryRouter history={history}>
    <Provider store={store}>
<<<<<<< HEAD
      <App />
=======
        <App />
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
    </Provider>
  </HistoryRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();