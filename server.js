const express = require('express'); 
const mongoose = require('mongoose');
const books = require('./books');
const bookModel = require('./book_model');
const { authUser, authenticateJWT } = require('./auth');


const app = express();
const database_uri = "mongodb+srv://njeunkweborel:pL3tOMBW83oJNDM4@cluster0.wy6yuha.mongodb.net/?retryWrites=true&w=majority";
const host = "localhost";


app.use(express.json());

app.get('/', (req, res) => {
    res.json({message : 'API IS WORKING ...'});
});

app.get('/api/books', authenticateJWT, (req, res) => {
    bookModel.find()
    .then((books) => {
        res.json(books);
    });
});

app.post('/api/book/add', authenticateJWT, (req, res) => {
    let title = req.body.title;
    let author = req.body.author;
    let publishedDate = req.body.publishedDate;

    let bookToSave = new bookModel({
        title: title,
        author: author,
        publishedDate: publishedDate
    }); 

    bookToSave
    .save()
    .then(bookSaved => {
        res.status(201).json({
            message: 'book successfully store to database !',
            book: bookSaved
        });
    })
    .catch(err => console.log('err', err));
});


app.put('/api/book/edit/:id', authenticateJWT, (req, res) => {
    let id = req.params.id;

    bookModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
    .then((data) => 
        console.log(data)
    ).catch(err => console.log(err));

    res.status(200).json("the book have been successfully update");

});


app.delete('/api/book/delete/:id', authenticateJWT, (req, res) => {
    let id = req.params.id;

    bookModel.findByIdAndDelete(id)
    .then((data) => 
        console.log(data)
    ).catch(err => console.log(err));

    res.status(200).json("the book have been delete");
});


app.post('/api/auth', authUser);


mongoose.connect(database_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`app is succefuly connected to codevigor Database...`);

    const server = app.listen(5000, function(){
        var port = server.address().port
        console.log("REST API demo app listening at http://%s:%s", host, port)
    });

  })
  .catch((e) => {
    console.log(`error when trying to connect with database : ${e}`);
});