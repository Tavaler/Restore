import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/layout/App'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";


// import './index.css'

export const history = createBrowserHistory({ window });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HistoryRouter history={history}>
    <App />
  </HistoryRouter >
)
