var {add,mul} = require('./js/mathUtils.js')
console.log(add(10,20));
console.log(mul(45,20));


import {name,age} from './js/info.js';
console.log(name);

require('./css/my_normal.css')

import Vue from 'Vue'
const vm = new Vue(
{
    el:"#app",
    data:{
        msg1:'学习使用webpack'
    },
    methods:{
        btnclick(){
            this.msg1='寻找webpack 包装文件……'
            }
         },
  })