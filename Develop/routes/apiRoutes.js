//Load data by linking routes
const fs = require('fs');
var data = require('../db/db.json');

//Routing
module.exports = function(app) {
  //API GET Routes
  // app.get('/api/notes', function(req, res) {
  //   res.json(data);
  // });

  //API GET Routes
  app.get('/api/notes', function(req, res) {
    //Read the JSON file
    fs.readFile('./db/db.json', 'utf8', (err, notes) => {
      if (err) throw err;
      let parsedNotes;
      // If notes isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }
      // return parsedNotes;
      res.json(parsedNotes);
    });
  });

  // API POST Request -- need to add to file research
  app.post('/api/notes/', function(req, res) {
    data.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(data, null, 2), err => {
      if (err) throw err;
      res.json(data);
      console.log('Note Added!');
    });
  });

  // app.delete('/api/notes/:id', (req, res) => {
  //   data.length = 0;

  //   res.json({ ok: true, msg: `Delete bootcamp ${req.params.id}` });
  // });

  // DELETE "/api/notes" deletes the note with an id equal to req.params.id
  app.delete('/api/notes/:id', (req, res) => {
    let noteId = req.params.id;
    console.log(noteId);
    fs.readFile('./db/db.json', 'utf8', (err, response) => {
      if (err) throw err;
      const allNotes = JSON.parse(response);
      const newAllNotes = allNotes.filter(note => note.id != noteId);
      fs.writeFile(
        './db/db.json',
        JSON.stringify(newAllNotes, null, 2),
        err => {
          if (err) throw err;
          res.json(data);
          console.log('Note deleted!');
        }
      );
    });
  });
};
