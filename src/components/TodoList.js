import React from 'react';
import '../assets/css/index.css';

class TodoList1 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          list: [
              {
                  titile: '录制ionic',
                  checked: true
              },
              {
                  titile: '录制nodejs',
                  checked: false
              },
              {
                  titile: '录制vue',
                  checked: false
              },
          ]
        };
    }

    addData = ()=>{

    }

    handelUp = (key)=>{
        var tplist = this.state.list;
        tplist[key].checked = !this.state.list[key].checked;
        this.setState({
            list: tplist,
        });

    }

    render(){
        return (
            <div>
                <h2>代办事件</h2>

                <br/>
                <ul>
                {
                    this.state.list.map((value, key) =>{

                        if (!value.checked) {
                            return(
                                <li>
                                    <input type="checkbox" checked={value.checked}/>
                                    {value.titile}

                                    <button onClick={this.handelUp.bind(this, key)}>删除</button>
                                </li>
                            )
                        }

                    })
                }
                </ul>
                <h2>已完结事件</h2>
                <ul>
                {
                    this.state.list.map((value, key) =>{

                        if (value.checked) {
                            return(
                                <li>
                                    <input type="checkbox" checked={value.checked}/>

                                    {value.titile}

                                    <button onClick={this.handelUp.bind(this, key)}>删除</button>
                                </li>
                            )
                        }

                    })
                }
                </ul>
            </div>
        );
    }


}
export default TodoList1;
