import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import products from './reducers/index'
import reducer from "../src/reducers/index"
import "@mui/material"
import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from "redux";

import { Provider } from 'react-redux'
const store = configureStore({reducer})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>

        <App />
    </Provider>
);