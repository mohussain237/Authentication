const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

//connection to DB
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true }, () =>
console.log("DATA_BASE Connection is Successful....")
);

// middleware for reading data from postman
app.use(express.json());

// Routers import
const authRoute = require("./routes/Auth");

// Route MiddleWare....
app.use("/api/user", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER is Listning On ${PORT}....!!`));
