const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const connectToDB = require('./database/dbConfig');
// run the mongoDB connection
connectToDB();

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/students', require('./routes/studentRoutes'));

// TODO: make connection to database

app.get('/api', (req, res) => {
  res.json({
    message: "Hello world"
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
