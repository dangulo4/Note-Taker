//Load data by linking routes
const fs = require('fs');
const data = require('../db/db.json');

//Routing
module.exports = function(app) {
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
      res.json(parsedNotes);
    });
  });

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
          res.json(true);
          console.log('Note deleted!');
        }
      );
    });
  });

  // API POST Request -- need to add to file research
  app.post('/api/notes/', function(req, res) {
    // console.log(data, 'New Note', req.body);

    //Read the JSON file
    fs.readFile('./db/db.json', 'utf8', (err, response) => {
      //convert the response to JSON
      let allNotes = JSON.parse(response);
      // console.log('NN', req.body, allNotes);

      //GRAB ID OF THE LAST ELEMENT FROM THE JSON FILE
      var lastNoteId = allNotes[allNotes.length - 1].id;
      lastNoteId = lastNoteId + 1;
      console.log(lastNoteId);

      //Append the new id to the user created note
      const newNote = { ...req.body, id: lastNoteId };
      console.log('Thew new note is: ', newNote);
      allNotes = [...allNotes, newNote];
      console.log('Updated List with new id: ', allNotes);
      //Update the file with new note info
      fs.writeFile('./db/db.json', JSON.stringify(allNotes), err => {
        if (err) throw err;
        res.json(allNotes);
        // console.log('Note Added!', allNotes);
      });
    });
  });
};
