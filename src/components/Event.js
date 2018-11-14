import React from 'react';

class Event extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            msg: '我是一个home组件',
            username: ''
        }
        //改变 this 指向的一种方法
        //this.run = this.run.bind(this);
    }

    run = (event)=> {
        //alert("I'm run...");
        //console.log(event);
        alert(event.target); //获取执行时间的domo节点

        event.target.style.background = 'red';

        alert(event.target.getAttribute('aid'));
    }

    inputChange = (e)=>{
        //alert("I'm inputChange...");
        console.log(e.target.value);
        this.setState({
            username: e.target.value,
        });
    }

    getName = ()=>{
        alert(this.state.username);
    }
    render(){
        return (
            <div>
                I'm Event组件
                {this.state.msg}

                {/*事件对象*/}
                <h2>事件对象演示 </h2>
                <button aid='123' onClick={this.run}>事件对象</button>
                <br/>
                <br/>
                <h2>表单事件</h2>

                {/*
                    获取表单的值
                    1.监听表单的改变事件                 onChange
                    2.在改变的事件里面获取表单输入的值      事件对象
                    3.把表单输入的值赋值给username        this.setState({})
                    4.点击按钮的时候获取 state 里面的username
                */}
                <input type="text" onChange={this.inputChange}/>
                <button onClick={this.getName}>获取input的值</button>
                <br/>
                {this.state.username}

            </div>
        )
    }

}

export default Event;
