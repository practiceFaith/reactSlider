import React,{Component} from 'react';

export default class Dots extends Component{

    render(){
        let style={display:(this.props.display?'block':'none')};
        return (<div className="dots" style={style}>{
            this.props.items.map((item, index) => (
                <span key={index}
                      className={'dot ' + (index === this.props.index || (this.props.index === this.props.items.length && index === 0) ? 'active' : '')}
                      onClick={() => {
                          this.props.slide(index - this.props.index)
                      }}></span>
            ))
        }</div>);
    }
}