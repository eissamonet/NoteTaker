const express = require('express');
const path = require('path');
const index = require('./routes/index.js')
const notes = require('./routes/notes.js');
const PORT = process.env.PORT || 3001;
const app = express();


//parse incoming string
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use('/api', index);
app.use('/', notes);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);