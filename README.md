# Note-Taker
  [![HitCount](http://hits.dwyl.com/{username}/{project}.svg)](http://hits.dwyl.com/{username}/{project})
  [![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()
  ## Description
  * The application will create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file. The following HTML routes should be created:

  * GET `/notes` - Will return the `notes.html` file.

  * GET `*` - Will return the `index.html` file
 
  * The following API routes should be created:

  * GET `/api/notes` - Will read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Will receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Will receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

  ![Questions](/Develop/image/myteam.gif)]
   ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#Questions)
  ## Installation
  * The following installations are required: The following installations are required:  The following installations are required: npm install: A step by step series of examples that tell you how to get a development env running
  ## Usage
  * node index.js
  * node express
  ## License
  * This project is licensed under the MIT License - see the LICENSE.md file for details
  ## Contributing
  * dangulo4
  ## Tests
  * You can use any text editor. There are plugins for many editors (e.g. Atom, Emacs, Sublime Text, Vim, and Visual Studio Code) that allow you to preview Markdown while you are editing it

  * Application should allow users to create and save notes.

  * Application should allow users to view previously saved notes.

  * Application should allow users to delete previously saved notes.
  ## Questions
  * Please don't hesitate to open an issue or pull request. You can also send me a message on Github  