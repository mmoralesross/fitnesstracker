const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const htmlRoutes= require('./routes/htmlroutes')
const apiRoutes= require('./routes/apiroutes')

const app = express()

const port = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))


//connect to atlas or local host

const dbURI = process.env.MONGODB_ATLAS_URI || 'mongodb://localhost/workout'; 


mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//routes

app.use(htmlRoutes)
//app.use(apiRoutes)


app.listen(port, function() {
    console.log ('listening ' + port)
} ) 