import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Append from "./Append";
import AppendDevice from "./AppendDevice";
import FirstTask from "./FirstTask";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/append" element={<Append/>}/>
            <Route path="/append_device" element={<AppendDevice/>}/>
            <Route path="/task1" element={<FirstTask/>}/>
        </Routes>

    </BrowserRouter>
);

