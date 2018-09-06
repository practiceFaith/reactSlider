import React,{Component} from 'react';

export default class MsgForm extends Component {
    handleSubmit=(event)=>{
        event.preventDefault();
        let username=this.username.value,
            content=this.content.value;
        this.props.addMessage({username:username,content:content,createAt:new Date()});
        this.username.value=this.content.value='';
    }
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="username" className="control-label">用户名：</label>
                    <input type="text" className="form-control" ref={x=>this.username=x}/>
                </div>
                <div className="form-group"><label htmlFor="content" className="control-label">内容</label><input type="text" ref={x=>this.content=x} className="form-control"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">发表</button>
                </div>
            </form>
        );
    }
}