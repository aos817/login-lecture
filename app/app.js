"use strict";

//모듈
const express=require("express");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
dotenv.config();

const app=express();


// 라우팅
const home=require("./src/routes");
const form = require('./src/routes/form');
const board = require('./src/routes/board');


//앱 세팅
app.set("views","./src/views");// view 파일들은 .view 에 잇다
app.set("view engine","ejs"); // 뷰엔진으로 npm 설치한 ejs 사용
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",home); //use ->미들 웨어를 등록해주는 메소드
app.use('/form', form);
app.use('/board', board);

module.exports=app;//앱을 내보내기
