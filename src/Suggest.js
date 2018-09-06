import React, {Component} from 'react';
import jsonp from 'jsonp';

export default class Suggest extends Component {
    constructor(){
        super();
        this.state={words:[],index:-1}
    }
    handleChange=(event)=>{
        let wd=event.target.value;
        this.word=wd;
        console.log(this.word);
        jsonp( `http://www.baidu.com/su?wd=${wd}`,{
    param:'cb'
},(error,data)=>{
            console.log(data);
            this.setState({words:data.s})
        });
}
handleKeyDown=(event)=> {
    let code = event.keyCode,
        index = this.state.index,
        length=this.state.words.length;

    if (code == 38) {
        --index==-2?index=length-1:null;
    } else if (code == 40) {
        ++index===length?index=-1:null;
    } else if (code == 13) {
        window.location.href = `http://www.baidu.com/s?wd=${event.target.value}`;
    }
    this.setState({index});
}

    render(){
        return (<div className="container">
            <div className="panel panel-default">
                <div className="panel-heading text-center">百度搜索</div>
                <div className="panel-body">
                    <input className={'form-control'} type="text" name="" id="" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.index==-1?this.word:this.state.words[this.state.index]}/>
                    <ul className={'list-group'}>{
                        this.state.words.map((word,index)=>(<li key={index} className={'list-group-item '+(index===this.state.index ?'active':'')}>{word}</li>))
                    }</ul>
                </div>
                <div className="panel-footer"></div>
            </div>
        </div>);
    }
}
