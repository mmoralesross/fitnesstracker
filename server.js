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

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//routes

app.use(htmlRoutes)
//app.use(apiRoutes)


app.listen(port, function() {
    console.log ('listening ' + port)
} ) 