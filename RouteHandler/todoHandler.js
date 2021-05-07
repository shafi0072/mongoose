const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')

const todoSchema = require('../schemas/todoSchema')
const Todo = new mongoose.model("Todo", todoSchema)


// get all todos

router.get('/', async(req, res) => {

});

//  get a todo 
 router.get('/:id', async(req, res) => {

 });

//  Post todos
router.post('/', async(req, res) => {
    const newTod = new Todo(req.body);
    await newTod.save((err) => {
        if(err) {
            res.status(500).json({
                error: "there was a server site error"
            })

        }
        else{
            res.status(200).json({
                message: "Todo Was inserted successfully"
            })
        }
    })

});

// post multiple todo
router.post('/all', async(req, res) =>{
    await Todo.insertMany(req.body, (err) => {
        if(err){
            res.status(500).json({
                error: "there was a server site error"
            })

        }
        else{
            res.status(200).json({
                message: "Todo Was inserted successfully"
            })
        }
    })
})
// update todo

router.put('/:id', async(req, res) => {

})
// delete todo

router.delete('/:id', async(req, res) => {

})

module.exports = router;