const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// loads the router module in the app
const productRouter = require('./routes/product');

app.use(express.json());
app.use(express.static(__dirname+'/client/stylesheet.css'));
app.use('/product', productRouter); // /product is actually ./routers/product
//NEW
app.use('/client', express.static(__dirname + '/client'));

/*  Get with Parameters  

  Ex.
    Request URL: http://localhost:3000/users/34/books/8989
    Route path:                   /users/:userId/books/:bookId
    req.params:                 {"userId": "34", 
                                 "bookId": "8989"}
    
    app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
    })
*/

//#################################################
// __** ROUTE HANDLERS **__ //
//#################################################

//   app.get, app.put, app.post, app.delete
// ->  read,    post,

// GET homepage method route
app.get('/', (req, res) => {
  //OLD  
  res.sendFile(__dirname+'/client/index.html');
})

// GET testJS route
app.get('/test.js', (req, res) => {
  //res.send('<h1>Node.js CRUD API</h1> <h4>Message: Success</h4><p>Version: 1.0</p>');
  res.sendFile(__dirname+'/client/test.js');
})

// GET product method route
// This is a GET request for product
app.get("/product", (req, res) => {
  res.json(data); // .json returns a JSON object
})

app.get('/health', (req, res) => {
  res.send(); // .send() returns HTML
})

app.listen(port, () => {
  console.log('Demo app is up and listening to port: ' + port);
})

/*
res.download()	  Prompt a file to be downloaded.
res.end()	        End the response process.
res.json()	      Send a JSON response.
res.jsonp()	      Send a JSON response with JSONP support.
res.redirect()	  Redirect a request.
res.render()	    Render a view template.
res.send()	      Send a response of various types.
res.sendFile()	  Send a file as an octet stream.
res.sendStatus()	Set the response status code and send its string representation as the response body.
*/