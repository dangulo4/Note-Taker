//Dependencies
var path = require('path');

// Routing
module.exports = function(app) {
  //HTML GET Routes
  app.get('/notes/', function(req, res) {
    res.sendFile(path.join(__dirname, './notes.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });
};
