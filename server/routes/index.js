/*<!--     Author- Dixit Hihoriya   -->
<!--       StudentID-301201312      -->
<!--       FileName-routes/index.js -->
<!--       WebApp Name: MidTerm COMP229          -->*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
