import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
//import './assets/css/App.css';
//引入Home组件
// import Home from './components/Home'
import Home from './components/News';
import Home2 from './components/Home2';
import News2 from './components/News2';
import News3 from './components/Home3';
import Event from './components/Event';
import List from './components/List';
import Todo from './components/Todo';
import ReactForm from './components/ReactForm';
import TodoList from './components/TodoList';

class App extends Component {

  //render 模板   jsx
  render() {
    return (
      <div className="App">
        Hello React...
        <TodoList/>
      </div>
    );
  }
}

export default App;
