const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');
const PORT = process.env.PORT || 3001;
const app = express();


//parse incoming string
app.use(express.urlencoded({ extended: true }));

// parse json data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);