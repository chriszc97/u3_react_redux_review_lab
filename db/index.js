const mongoose = require('mongoose');

let MONGODB_URI = 'mongodb://127.0.0.1:27017/locationDatabase';

mongoose
  //not needed
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewURLParser: true
  })
  .then(() => {
    console.log('Successfull connection!');
  })
  .catch((e) => {
    console.error('Connection Error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
