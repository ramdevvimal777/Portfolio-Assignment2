var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
// About page.
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
// Project page.
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
// Contact page.
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});



module.exports = router;
