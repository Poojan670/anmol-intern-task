// Basic REST API for Books Management using Node JS

// Use of Express Js for CRUD operations

// Use of bodyParser to parse requests to JSON

// Since, its just a simple demo,
// Use of javascript in memory has been used instead of databases like MongoDB ,MySQL

// Usage of POSTMAN is prioritized

/* 
    IMPORTANT NOTE : Since this script uses in memory usage, the storage is reset on every refresh!
*/

const express = require('express'),
    swaggerUi = require('swagger-ui-express'),
    swaggerFile = require('./swagger.json');;

const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const app = express();

app.use(bodyParser.json());

// Swagger Route -> Documentation
app.use('/doc', swaggerUi.serve,
    swaggerUi.setup(swaggerFile, { swaggerOptions: { persistAuthorization: true } }))

// Initalized Books Dict
const books = {};

// Add New Books -> POST Request
app.post('/books', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const bookName = req.body.bookName || res.status(400).json({
        "msg": "bookName is required!"
    });
    const ISBN = req.body.ISBN || res.status(400).json({
        "msg": "ISBN is required"
    });

    books[id] = {
        id, bookName, ISBN
    }
    res.status(201).send(
        books[id]
    );
})


// Lists All Books -> GET Request
app.get('/books', (req, res) => {
    res.json(books);
})


// Retreive Book By Id
app.get('/books/:id', (req, res) => {
    const bookObj = books[req.params.id];
    bookObj != null ? res.send(bookObj) : res.status(404).json({
        "msg": "Book with this id not found!"
    })
})


// Delete A Book By Id
app.delete('/books/:id', (req, res) => {
    const bookObj = books[req.params.id]
    if (bookObj == null) {
        res.status(404).json({
            "msg": "Book with this id not found!"
        })
    }
    delete books[req.params.id];
    // books = books.filter(({ id }) => id !== req.params.id);
    res.status(404).json({
        "msg": "Book object delete successfully!"
    })
})

// Patch(Update) a Book By Id
app.patch('/books/:id', (req, res) => {
    const bookObj = books[req.params.id]
    if (bookObj == null) {
        res.status(404).json({
            "msg": "Book with this id not found!"
        })
    }
    bookObj['bookName'] = req.body.bookName || bookObj.bookName
    bookObj['ISBN'] = req.body.ISBN || bookObj.ISBN

    res.status(200).send(bookObj);
})

app.listen(5000, () => {
    console.log("Listening on port 5000 !")
})