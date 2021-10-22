require("dotenv").config();

const express = require("express");
const coffeeRouter = require("./routes/coffee")
const { connection } = require("./connection");
const app = express();

app.use(express.json());
app.use("/coffee", coffeeRouter)

app.listen(process.env.HTTP_PORT || 80, () => {
    connection.once("open", () => {
        console.log("MongoDB database connection established successfully!");
        console.log("App online")
    })
});