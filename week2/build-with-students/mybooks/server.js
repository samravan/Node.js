'use strict'
const express = require("express");
let app = express();
const { v4: uuidv4 } = require('uuid');

app.use(express.json()); // for parsing json in request body


const data = require('./books.json')




app.get ( '/books'      , function (req, res) { readBooks(req, res);})
app.post ( '/books'     ,function (req, res) { creatBooks(req, res);})
app.put ( '/books/:id'  ,function (req, res) { updateBooks(req, res);})
app.delete ( '/books/:id'   ,function (req, res) { deleteBook(req, res);})

function deleteBook(req, res) {
    const bookToDelete = data.find(book => book.id == req.params.id);
    if ( typeof bookToDelete == 'undefined') {
        res.status(404);
        res.send('Book is Deleted');
        return;
     }
    data.splice(data.indexOf(bookToDelete), 1);
    res.send('OK')
}



function updateBooks(req, res) {
    if(isInvalid(req)) {
        res.status(400);
        res.send('Invalid request');
        return;
       }

    const bookToUpdate = data.find(book => book.id == req.params.id);
    if ( typeof bookToUpdate == 'undefined') {
        res.status(404);
        res.send('No such book');
        return;
     }
     bookToUpdate.title = req.body.title;
     bookToUpdate.author = req.body.author;
     res.send('OK');
    }



function creatBooks(req, res) {
    if(isInvalid(req)) {
        res.status(400);
        res.send('Invalid request');
        return;
    }
       const id = uuidv4();
       let newBook = {
           id: id,
           title: req.body.title,
           author: req.body.author
       }
       data.push(newBook);
       res.status(201);
       res.send(id);
}



function readBooks(req, res) {
    // Content Type
    res.setHeader("Content-Type", "application/json");
    res.send(data);
}




function isInvalid(req) {
    if(typeof req.body == 'undefined' ||
       typeof req.body.title == 'undefined' ||
       typeof req.body.author == 'undefined') {
        return true;
       } else {
           return false;
       }
}

app.listen(3000);


