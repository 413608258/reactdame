import React from 'react';

class Home3 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            msg: '我是一个home组件',
            username: 'Lous'
        }
        //第二种改变this指向的方法
        this.getMessage = this.getMessage.bind(this);
    }

    run(){
        alert("我是一个按钮");
    }

    getData(){
        alert(this.state.msg);
    }

    getMessage(){
        alert(this.state.msg);
    }
    //第三种改变 this 指向的方法
    getName = ()=> {
        alert(this.state.username);
    }

    setData = ()=> {
        this.setState({
            msg: '我是一个Home组件，这是改变后的值'
        })
    }
    setName = (msg, name)=>{
        this.setState({
            msg: msg,
            username: name
        })
    }


    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <h2>{this.state.username}</h2>
                <button onClick={this.run}>执行方法</button>

                <br/>

                <button onClick={this.getData.bind(this)}>getData-第一种改变this指向的方法</button>

                <br/>

                <button onClick={this.getMessage}>getMessage-第二种改变this指向的方法</button>

                <br/>

                <button onClick={this.getName}>getName-第三种改变this指向的方法</button>

                <br/>

                <button onClick={this.setData}>setData</button>
                <br/>

                <button onClick={this.setName.bind(this, '张三', '李四')}>执行方法传值</button>

            </div>
        )
    }

}

export default Home3;
