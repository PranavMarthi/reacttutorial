import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import './styles/global.css';


const reactContentRoot = document.getElementById("root");


console.log(App);

ReactDOM.render(<App />, reactContentRoot)