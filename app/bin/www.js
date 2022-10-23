"use strict";

const app=require("../app");//앱을 가져오기
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("서버 가동");
    });