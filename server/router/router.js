const express = require('express')
const app = express.Router()
const shareModel = require('../schema/shareSchema')
const userSchema = require('../schema/userSchema')

app.post('/addstory', async (req, res) => {
    let result = new shareModel(req.body)
    result = await result.save()
    res.send(result)
})
app.put('/updatestory/:id', async (req, res) => {
    let result = await shareModel.updateOne({ _id: req.params.id }, { $set: req.body })
    

    res.send(result)
})
app.post('/signup', async (req, res) => {
    let result = new userSchema(req.body)
    result = await result.save()
    res.send(result)
})
app.post('/login', async (req, res) => {
    let result =await userSchema.findOne(req.body)
    res.send(result)
})
app.get('/addstory/:title', async (req, res) => {
    let result = await shareModel.findOne({title:req.params.title})
   
    res.send(result)
})
app.get('/stories', async (req, res) => {
    let result = await shareModel.find()
   
    res.send(result)
})
app.get('/stories/:id', async (req, res) => {
    let result = await shareModel.findOne({_id:req.params.id})
   
    res.send(result)
})
app.get('/updatestory/:id', async (req, res) => {
    let result = await shareModel.findOne({ _id: req.params.id })
    res.send(result)
})

app.get('/profile/:key', async (req, res) => {
    let result = await shareModel.find({
        "$or":[
            {userid:{$regex:req.params.key}},
            
        ]
    })
    res.send(result)

})
app.delete('/:id', async (req, res) => {
    let result = await shareModel.deleteOne({ _id: req.params.id })
    res.send(result)
})
app.get('/childstory/:key', async (req, res) => {
    let result = await shareModel.find({
        "$or": [
            {type:{$regex:req.params.key}},
            
        ]
    })
    res.send(result)
})
app.get('/motivationalstory/:key', async (req, res) => {
    let result = await shareModel.find({
        "$or": [
            {type:{$regex:req.params.key}},
            
        ]
    })
    res.send(result)
})
app.get('/randomstory/:key', async (req, res) => {
    let result = await shareModel.find({
        "$or": [
            {type:{$regex:req.params.key}},
            
        ]
    })
    res.send(result)
})
app.get('/funnystory/:key', async (req, res) => {
    let result = await shareModel.find({
        "$or": [
            {type:{$regex:req.params.key}},
            
        ]
    })
    res.send(result)
})
module.exports = app;