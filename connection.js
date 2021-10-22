const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION_String, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

module.exports = { connection };