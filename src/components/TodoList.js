import React from 'react';
import '../assets/css/index.css';

class TodoList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          list: [],
        };
    }

    addData = ()=>{
        //alert(this.refs.title.value);
        var tempList = this.state.list;
        tempList.push(this.refs.title.value);

        this.refs.title.value = '';
        this.setState({
            list: tempList,
        });

    }

    removeData = (key)=>{
        //alert(key);
        var tempList = this.state.list;
        tempList.splice(key, 1);

        this.setState({
            list: tempList,
        });
    }

    render(){
        return (
            <div>
                <h2>React TodoList 案例演示</h2>
                <br/>

                <input ref="title" type="text"/> <button onClick={this.addData}>增加+</button>

                <br/>
                <ul className="list">
                    {
                        this.state.list.map((value, key)=>{
                            return (
                                <li key={key}>{value}--- <button onClick={this.removeData.bind(this, key)}>删除</button></li>
                            )
                        })
                    }

                </ul>

            </div>
        );
    }


}
export default TodoList;
