const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');

const dbDetails = require('./configuration/dbConfig')
const routes = require('./routes')

const dbURL = dbDetails.dbConfig

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/',routes) 

mongoose.connect(dbURL,{ useUnifiedTopology: true },
    ()=>{
    console.log("Connected to DB");
})

app.listen(3000);