var express = require('express');
var router = express.Router();
var moviescontroller=require
  ('../controllers/moviescontroller');



/* GET users listing. */
router.get('/all', moviescontroller.getAllmovies);
  res.send('respond with a resource');

module.exports = router;
