require("dotenv").config({
  path: `.env.development`,
  
});

const mongoose = require("mongoose");
const express = require("express");

const uri = process.env.MONGO_URI; // adding the uri for MongoDB

const app = express();

mongoose
  .connect(uri, {
    useUnifiedTopology: true, //required for initialise
    useNewUrlParser: true, //required for initialise
    useCreateIndex: true, //use to enable unique data type
    useFindAndModify: false, // use findOneAndUpdate instead of findAndModify
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));


const alienRouter = require('./routes/aliens')

app.use('/aliens', alienRouter)


app.listen(3000, () => console.log("server running on 3000"));


// module.exports = app;