import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Slider from './componentSlider/Slider';
import PropTypes from 'prop-types';
import Suggest from './Suggest';
import  Message from './Message';

let IMG_SRC=[{src:require('./componentSlider/imgs/1.jpg')},{src:require('./componentSlider/imgs/2.jpg')},{src:require('./componentSlider/imgs/3.jpg')}];

render(<Slider
    items={IMG_SRC}
    speed={1.2}
    delay={2.1}
    auto={true}
    dots={true}
    arrows={false}/>,document.querySelector('#root'));
// let text=['text1','text2','文本三',''];
// ReactDOM.render(<div>{text.map(function(item,index){
//     return <span key={index}>{item}</span>;
//     document.getElementById('root'));

// let Message=({msg,id})=>{
//     return <h1 id={id}>{msg}</h1>;
// }
// render(<Message msg='nihods' id={'hdi'}/>,document.querySelector('#root'));
// function render(eleObj,container){
//     let {type,props}=eleObj;
//     let ele=document.createElement(type);
//     for(let attr in props){
//         if (typeof props[attr] ==='string'){
//             let str=/^[a-z]+/.exec(attr)[0];
//             ele.setAttribute(str,props[attr]);
//         } else{
//             props[attr].forEach(function(item){
//                 if (typeof item==='string'){
//                     let textNode=document.createTextNode(item);
//                     ele.appendChild(textNode);
//                 } else{
//                     render(item,ele);
//                 }
//             });
//         }
//     }
//     container.appendChild(ele);
// }
// let eleObj={type:'div',props:{
//         className:'red',
//         children:['hello',{type:'a',props:{
//                 className:'green',children:['world']
//             }}]
//     }}
// render(eleObj,document.querySelector('#root'));


