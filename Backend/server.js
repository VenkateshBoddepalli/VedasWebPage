// const http = require("http");
// const hostname = "localhost";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type","text/html");
//   res.end("<h1>Venkatesh Boddepalli @123 </h1>");
// });
// server.listen( port, hostname, () => {
//   console.log(`server is running on localhost:${port}`);
// });


// What is require?
//       require is used to import modules in Node.js
const express = require('express'); //used to create server
const cors = require('cors'); // allows frontend (different domain) to access backend
const bodyParser = require('body-parser'); // reads request data (JSON, form data)
const path = require('path'); // helps with file/folder paths
const connection = require('./database/db'); //your database connection file

// Create app & port
const app = express();  // your server instance
const port = 3000;  // server runs on localhost:3000 


// Middleware setup
app.use(cors('*'));  // Allows requests from any origin (frontend apps)
// Handles large request data (like images, big JSON)
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// Static files & view engine
app.use(express.static(path.join(__dirname, 'public'))); ///Serves files from public folder (HTML, CSS, JS)
app.set('view engine', 'ejs'); //Uses EJS template engine to render dynamic pages


// Custom middleware (important)
app.use(function(req, res, next) { // Adds database connection to every request
  req.connection = connection;
  next(); // Passes control to the next middleware and Without next(), request will hang.
});

// route
const router = require('./routes');  // Imports routes from routes folder
app.use('/api/payment', router.payment);  // All APIs will start with: /api/payment or /api/payment/create


// Start server
// Starts server, Prints message in console
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
// app.listen = Starts the server. Listens for incoming requests on port 3000.