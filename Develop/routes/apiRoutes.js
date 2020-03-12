//Load data by linking routes
var path = require('path');
var data = require('../db/db.json');

//Routing
module.exports = function(app) {
  //API GET Routes
  app.get('/api/notes', function(req, res) {
    res.json(data);
  });

  // If no matching route is found default to home
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // API POST Request
  app.post('/api/notes', function(req, res) {
    data.push(req.body);
    res.json(true);
  });

  app.post('/api/clear', function(req, res) {
    data.length = 0;

    res.join({ ok: true });
  });
};
