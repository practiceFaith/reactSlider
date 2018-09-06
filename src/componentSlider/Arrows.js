import React,{Component} from 'react';

export default class Arrows extends Component {
    render(){
        let style={display:(this.props.display?'block':'none')};
        return (<div style={style} className="arrows"><span onClick={() => this.props.slide(-1)} className={'arrowLeft'}>&lt;</span><span
            onClick={() => this.props.slide(1)} className={'arrowRight'}>&gt;</span></div>);
    }
}