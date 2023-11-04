// dependencies
const express = require('express');

// server to use routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// creat server
const app = express();

// set port
const PORT = process.env.PORT || 3001;

//middleware for parsing url encoded and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use routes
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);