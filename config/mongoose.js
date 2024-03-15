// requiring the library
const mongoose = require('mongoose');

const DB = 'mongodb+srv://DarkShadow:iamgroot@cluster0.akjk0yu.mongodb.net/?retryWrites=true&w=majority';

//connecting to the database
mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// acquiring the connection to check if it is succesfull
const db = mongoose.connection;

// checking for the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", () => {
  console.log("succesfully connected to database");
});

// exporting the connection
module.exports = db;
