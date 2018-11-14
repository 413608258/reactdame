import React from 'react';

import '../assets/css/index.css';
/*
绑定属性注意：

    class 要换成className

    for 要换成 htmlFor

    style：
            <div style={{color: "red"}}>我是一个红的 div 行内样式</div>
            <div style={this.state.style}>我是一个红的 div 行内样式</div>
            
    其他的和之前的一样
*/

class Home2 extends React.Component{
    //数据
    constructor(props){
        super(props);

        this.state={
            msg: "I‘m Home2 组件’",
            title: "我是一个title",
            red: "red",
            style:{
                color: 'red',
                fontSize: '40px'
            }
        }
    }

    //模板
    render(){
        return (
            <div>
                <h2>{this.state.msg}</h2>

                <div title={this.state.title}>我是一个div</div>

                <br/>

                <div className="red">className="red"</div>

                <br/>

                <div className={this.state.red}>className={this.state.red}</div>

                <label htmlFor=""></label>

                <br/>

                <label htmlFor="name">姓名</label>
                <input id="name"/>

                <br/>

                <div style={{color: "red"}}>我是一个红的 div 行内样式</div>

                <br/>

                <div style={this.state.style}>我是一个红的 div 行内样式</div>
            </div>
        )
    }

}

export default Home2;
