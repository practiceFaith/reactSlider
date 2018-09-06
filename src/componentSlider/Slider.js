import React, {Component} from 'react';
import './slider.css';
import Dots from './Dots';
import Arrows from './Arrows';

export default class Slider extends Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    slide = (step) => {
        let index = this.state.index + step;
        if (index > this.props.items.length) {
            this.$slider.style.left = 0;
            this.$slider.style.transitionDuration = '0s';
            window.setTimeout(() => {
                index = 1;
                this.$slider.style.left = '-400px';
                this.$slider.style.transitionDuration = this.props.speed + 's';
                this.setState({index});
            });
            return;
        }
        if (index < 0) {
            this.$slider.style.left = this.props.items.length * (-400) + 'px';
            this.$slider.style.transitionDuration = '0s';
            window.setTimeout(() => {
                index = this.props.items.length - 1;
                this.$slider.style.left = index * (-400) + 'px';
                this.$slider.style.transitionDuration = this.props.speed + 's';
                this.setState({index});
            });
            return;
        }
        this.setState({index});
    }

    componentDidMount() {
        this.$slider = document.querySelector('.slider-group');
        if (this.props.auto) {
            this.$timer = window.setInterval(() => {
                this.slide(1)
            }, this.props.delay * 1000);
        }
    }

    handleMouseOver = () => {
        window.clearInterval(this.$timer);
        this.$timer = null;
    }
    handleMouseOut = () => {
        this.$timer = window.setInterval(() => {
            this.slide(1)
        }, this.props.delay * 1000);
    }

    render() {
        let style = {
            width: this.props.items.length * 400 + '400px',
            left: this.state.index * -400 + 'px',
            transitionDuration: this.props.speed + 's'
        }
        return (<div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className="slider-wrapper">
            <ul style={style} className="slider-group">
                {this.props.items.map((img, index) => (
                    <li className={'slider-group-item'} key={index}><img src={img.src} alt=""/></li>))}
                <li className={'slider-group-item'} key={this.props.items.length}><img src={this.props.items[0].src}
                                                                                       alt=""/></li>
            </ul>
            <Dots items={this.props.items} index={this.state.index} slide={this.slide} display={this.props.dots}/>
            <Arrows slide={this.slide} display={this.props.arrows}/>
        </div>);
    }
}