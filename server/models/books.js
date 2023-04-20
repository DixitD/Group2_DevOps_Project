/*<!--     Author- Dixit Hihoriya   -->
<!--       StudentID-301201312      -->
<!--       FileName-books.js.js     -->
<!--       WebApp Name: MidTerm COMP229          -->*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
