const express = require('express')
const mongoose = require('mongoose')
const todoHandler = require('./RouteHandler/todoHandler')
const app = express()

app.use(express.json())

// connectionDB
mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connection successfull'))
.catch(err => console.log(err))

// router 
app.use('/todo', todoHandler)

function errorHandler (err, req, res, next){
    if(req.headerSent){
        return next(err)
    }
    res.status(500).json({error: err});
}

app.listen(5000, () => {
    console.log('your app is running on PORT 5000');
})