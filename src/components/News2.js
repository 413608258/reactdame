import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/index.css';

class News2 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            msg: '新闻',
            list: ['1111', '2222'],

            list2: [<h2 key='1'>H222</h2>, <h2 key='2'>H22222</h2>],

            list3: [
                {title: "新闻1"},
                {title: "新闻2"},
                {title: "新闻3"}
            ]
        }
    }

    render(){
        var listResult = this.state.list.map(function(value, key){
            return <li key={key}>{value}</li>
        })
        return(
            <div className="news2">
                {this.state.msg}

                <img src={logo}/>

                <img src={require('../assets/images/logo.svg')}/>

                <img src="https://www.baidu.com/img/bd_logo1.png?where=super"/>

                <br/>
                {this.state.list2}
                <br/>
                {listResult}
                <br/>
                {
                    this.state.list3.map(function(value, key){
                        return <li key={key}>{value.title}</li>
                    })
                }
            </div>
        )
    }
}

export default News2;
