//Load data by linking routes
var notes = require('../db/db');

//Routing
module.exports = function(app) {
  //API GET Routes
  app.get('/api/notes', function(req, res) {
    res.json(notes);
  });

  // If no matching route is found default to home
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
