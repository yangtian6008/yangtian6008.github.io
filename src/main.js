var {add,mul} = require('./js/mathUtils.js')
console.log(add(10,20));
console.log(mul(45,20));


import {name,age} from './js/info.js';
console.log(name);

require('./css/one.css')
import Vue from 'Vue'
var vm=new Vue({
    el:"#app",
    data:{
    msg:'学习使用webpack',
    },
    methods:{
    btnclick(){
    this.msg='寻找webpack 包装文件……'
    }
    },
    })