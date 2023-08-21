const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog.js');
const htmlRoutes = require('./routes/index.js')
const apiRoutes = require('./routes/notes.js');

const PORT = 3001;

const app = express();

// Import custom middleware, "clog"
app.use(clog);


//middleware for parsing url encoded and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use routes
app.use('/api', notes);
app.use('/', index);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);