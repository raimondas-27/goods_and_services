require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

// connection to database
mongoose
  .connect(process.env.MONGO_CONNECT_STRING, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => console.error(err.message));

// Middleware
app.use(morgan('dev'));

// allows to get req.body as json
app.use(express.json());
app.use(cors());

//Routes

const ordersRoutes = require("./Routes/ordersRoutes")
app.use("/", ordersRoutes)


app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});

app.listen(PORT, console.log(`Back end online on port ${PORT}`));