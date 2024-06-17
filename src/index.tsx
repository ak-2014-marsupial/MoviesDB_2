import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import "./providers/i18n/i18n"
import {store} from "./redux";
import {Provider} from "react-redux";
import {router} from "./providers";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

