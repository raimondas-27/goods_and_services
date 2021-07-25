require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

// prisijungimas prie duomenu bazes
mongoose
  .connect(process.env.MONGO_CONNECT_STRING, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Conneced to Mongo ooooooooose');
  })
  .catch((err) => console.error(err.message));

// MIddleware
app.use(morgan('dev'));
// leidzia req body gauti kaip json
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});

app.listen(PORT, console.log(`Back end online on port ${PORT}`));