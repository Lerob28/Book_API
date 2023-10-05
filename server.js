const express =   require('express'); 
const mongoose =  require('mongoose');
const books =     require('./books');
const bookModel = require('./book_model');
const { authUser, authenticateJWT } = require('./auth');


const app = express();
const database_uri = "mongodb+srv://njeunkweborel:pL3tOMBW83oJNDM4@cluster0.wy6yuha.mongodb.net/?retryWrites=true&w=majority";
const host = "localhost";

const normalizePort = (val) => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || "4000");


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
    if (!req.body.title && !req.body.author && !req.body.publishedDate) {
        res.status(400).json({ message: "Content can not be empty!" });
    }else {
        let bookToSave = new bookModel({
            title: req.body.title,
            author: req.body.author,
            publishedDate: req.body.publishedDate
        }); 

        bookToSave
        .save()
        .then(bookSaved => {
            res.status(201).json({
                message: 'book successfully save !',
                book: bookSaved
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving book"
            });
        });
    }
    
});


app.put('/api/book/edit/:id', authenticateJWT, (req, res) => {
    if(!req.body.title && !req.body.author && !req.body.publishedDate) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }else {
        let id = req.params.id;

        bookModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
        .then((book) => {
            res.status(200).json({message: "the book have been successfully update", book});
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while updating book"
            });
        });
    }
});


app.delete('/api/book/delete/:id', authenticateJWT, (req, res) => {
    let id = req.params.id;

    bookModel.findByIdAndDelete(id)
    .then((book) =>{
        if (!book) {
            res.status(404).send({
              message: `book not found.`
            });
          } else {
            res.send({
              message: "the book have been successfully delete!"
            });
          }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });

});


app.post('/api/auth', authUser);
  

mongoose.connect(database_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`app is succefuly connected to codevigor Database...`);

    app.listen(port, function(){
        console.log("REST API demo app listening on port %s", port)
    });

  })
  .catch((e) => {
    console.log(`error when trying to connect with database : ${e}`);
});