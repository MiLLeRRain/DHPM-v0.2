import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
    region: 'ap-south-2',
    secretAccessKey: 'AKIARX7R3J33OU4PA6HP',
    accessKeyId: 'DbsqoLIYgXKVvTF68QUZo37+vufrNGdFOZqM3F78'
}

AWS.config.update(configuration)

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// For loading canvas js
componentDidMount();

function componentDidMount() {
    let script = document.createElement('script');
    script.class = "external-script"
    document.body.appendChild(script);
}