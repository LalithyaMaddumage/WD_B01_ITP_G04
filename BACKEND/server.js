const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8060;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})


const connection = mongoose.connection;
//connect database
 connection.once("open",() => {
    console.log("mongodb Connection Sucess !");
 })

 const garmentRouter = require("./routes/supplier.js");
 const itemRouter = require("./routes/item.js");

 app.use("/supplier",garmentRouter)
 app.use("/item",itemRouter)

 app.listen(PORT,() => {
    console.log(`server is up and running on port: ${PORT}`);
 })