import React,{Component} from 'react';

export default class MsgList extends Component{

    render(){
        return (this.props.messages.map((message,index)=>(
            <li className={'list-group-item'} key={index}>{message.username}:{message.content}<span className={"pull-right"}>{message.createAt.toLocaleString()}</span>
            <button className="btn btn-danger btn-xs" onClick={()=>(this.props.removeMsg(index))}>删除</button>
            </li>
        )));
    }
}