const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const htmlRoutes = require('./routes/htmlRoutes.js')
const apiRoutes = require('./routes/apiRoutes.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);


//middleware for parsing url encoded and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);