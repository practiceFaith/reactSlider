import React, {Component} from 'react';
import MsgList from './MsgList';
import MsgForm from './MsgForm';
export default class Message extends Component {
    constructor() {
        super();
        this.state = {
            messages: []
        }
    }
addMessage=(message)=>{
        if (message.content.length===0) return;
        let messages=[...this.state.messages,message];
        this.setState({messages});
}
removeMsg=(index)=>{
this.state.messages.splice(index,1);

this.setState({messages:[...this.state.messages]});
    }
    render() {
        return (<div className='container'>
            <div className="row">
                <div
                    className="col-sm-8 col-sm-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className={'text-center'}>欢迎来到我的主页</h2>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <MsgList messages={this.state.messages} removeMsg={this.removeMsg}/>
                            </ul>
                        </div>
                        <div className="panel-footer"><MsgForm addMessage={this.addMessage}/></div>
                    </div>
                </div>
            </div>
        </div>);
    }
}