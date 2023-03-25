const express = require('express')
const app = express.Router()
const shareModel = require('../schema/shareSchema')
const userSchema = require('../schema/userSchema')

app.post('/addstory', async (req, res) => {
    let result = new shareModel(req.body)
    result = await result.save()
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

module.exports = app;