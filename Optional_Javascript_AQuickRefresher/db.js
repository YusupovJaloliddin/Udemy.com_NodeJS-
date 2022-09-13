const mongoose = require("mongoose");

let DbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server:${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`MongoDB connection error => ${err}`);
    });
};
module.exports = DbConnection;
