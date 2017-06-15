var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/').get(function(req, res, next) {
  res.render('index', { title: 'Express' });
}).post(function(req, res) {
     var user={
         username: 'adminw',
         password: '123456'
     }
     if(req.body.username === user.username && req.body.password === user.password){
        req.session.user = user;
         res.redirect('/home');
    }else{
     res.redirect('/login');
    }
 });
router.route('/login')
.get(function(req, res) {
     res.render('login', { title: '用户登录' });
 })
 .post(function(req, res) {
     var user={
         username: 'adminw',
         password: '123456'
     }
     if(req.body.username === user.username && req.body.password === user.password){
     	req.session.user = user;
         res.redirect('/home');
    }else{
     res.redirect('/login');
    }
 });

 router.route('/zhuce')
 .get(function(req, res) {
    res.render('zhuce', { title: '用户注册' });
 }).post(function(req, res) {
    var user={
         username: req.body.username,
         password: req.body.password
     }
     if(req.body.password === req.body.password1){
        // req.session.user = user;
         res.redirect('/login');
    }else{
     res.redirect('/zhuce');
    }
 });
 
 router.get('/logout', function(req, res) {
 	req.session.user = null;
     res.redirect('/');
 });
 
 router.get('/home', function(req, res) {
     var user={
         username:'admin',
         password:'123456'
     }
     res.render('home', { title: 'Home' });
 });
 router.get('/list1',function(req,res){
    res.render('list1');
 })
 router.get('/list2',function(req,res){
    res.render('list2');
 })
 router.get('/list3',function(req,res){
    res.render('list3');
 })
 router.get('/liu',function(req,res){
    res.render('liu');
 })
module.exports = router;
