/*
  React是 React核心库
  ReactDOM 提供与DOM 相关的功能
*/
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';//css可以删掉
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
