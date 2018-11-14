import React from 'react';

class Todo extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          msg: 'hello...'
        };
    }
    inputChange = (e)=>{
        this.setState({
            msg: e.target.value,
        });
    }

    setMsg = ()=>{
        this.setState({
            msg: 'Lous',
        });
    }

    render(){
        return (
            <div>
                <h2>双向数据绑定</h2>
                    {this.state.msg}

                    {/*model 改变影响View， view 改变影响model*/}
                    <input value={this.state.msg} onChange={this.inputChange}/>

                    <button onClick={this.setMsg}>按钮</button>

                    <input defaultValue={this.state.msg}/>
            </div>
        )
    };


}

export default Todo;
