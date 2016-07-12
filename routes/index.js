var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'take' });
});
router.get('/room',function (req,res,next) {
  res.render('room',{title:"部屋"});
});

router.get('/owner',function (req,res,next) {
  res.render('room_owner',{title:"管理者"});
});
router.get('/vote_make',function (req,res,next) {
  res.render('vote_make',{title:"アンケート作成"});
});
router.get('/vote_view',function (req,res,next) {
  res.render('vote_view',{title:"アンケート回答"});
});
router.get('/member',function (req,res,next) {
  res.render('room_member',{title:"参加者"});
});
router.get('/entry',function (req,res,next) {
  res.render('room',{title:"投票"});
});

module.exports = router;