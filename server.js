const express = require('express'); 
const books = require('./books');


const app = express();
const host = "localhost";
const fs = require('fs');


app.use(express.json());


app.get('/', (req, res) => {
    res.json({message : 'API IS WORKING ...'});
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.post('/api/book/add', (req, res) => {
    const bookToSave = {
        id: (books.length) + 1,
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate
    }; 

    books.push(bookToSave);

    res.json(books);
});

app.put('/api/book/edit/:id', (req, res) => {
    let id = req.params.id;

    let title = req.body.title;
    let author = req.body.author;
    let publishedDate = req.body.publishedDate;

    let index = books.findIndex((book) => {
        return book.id == Number.parseInt(id);
    });

    let bookToUpdate = books[index];

    bookToUpdate.title = title;
    bookToUpdate.author = author;
    bookToUpdate.publishedDate = publishedDate;

    res.json(bookToUpdate);
});


app.delete('/api/book/delete/:id', (req, res) => {
    let id = req.params.id;

    let index = books.findIndex((book) => {
        return book.id == Number.parseInt(id);
    });

    let bookToDelete = books[index];

    books.splice(index, 1);

    res.json(books);
});





const server = app.listen(5000, function(){
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})