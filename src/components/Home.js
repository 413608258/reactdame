import React, { Component } from 'react';

class Home extends Component{

  constructor(){

    super();

    //定义数据
    this.state={

        nema:"张三",
        age: '30',
        userinfo:{
        username:"itying"
      }
    }
  }

  render(){
    return (
      <div>

        <h2>react </h2>
        <p>姓名：{this.state.nema}</p>
        <p>年龄：{this.state.age}</p>
        <p>对象: {this.state.userinfo.username}</p>
      </div>
    )
  }

}

export default Home;
