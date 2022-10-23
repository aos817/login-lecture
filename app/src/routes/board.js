var express = require('express');
var router = express.Router();
var mysql = require('mysql');  // db 폴더를 만들어서 conn 과 info 를 만들어 코드의 길이를 최대한줄일수도있다고한다
const db=require("../config/db");


/* GET List Page. */
router.get('/list',function (req,res,next) {
    res.redirect('/board/1')// /board로 접속요청이 들어왔을 때 1페이지로 자동으로 이동하도록 리다이렉트 해줍니다.
  })
  router.get('/list/:page', function(req, res, next) {
  
    var query = db.query('select idx,title,writer,hit,DATE_FORMAT(moddate, "%Y/%m/%d %T") as moddate from board',function(err,rows){
      if(err) console.log(err)        // 만약 에러값이 존재한다면 로그에 표시합니다.
      console.log('rows :' +  rows);
      res.render('list', { 
        title:'Board List',rows: rows }); // view 디렉토리에 있는 list 파일로 이동합니다.
    });
  });
module.exports = router;