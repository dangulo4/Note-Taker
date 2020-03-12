// Dependencies
var express = require('express');

//Express configuration
// Create express server
var app = express();

//Set inital port
var PORT = process.env.PORT || 8080;

// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Router points server to route files
// These routes give out server a "map" of how to respond when users visit or request data from various URLS
//Router points server to route files
// These routes give out server a "map" of how to respond when users visit or request data from various URLS
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener - effectively "starts" the server
app.listen(PORT, () => console.log('App listening on PORT: ' + PORT));
