const express = require('express')
const logMidWare = require('./middlewares/logMiddleWares')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(logMidWare)

app.get('/welcome',(req,res) => {
    res.status(200).send('WECLOME')
})


app.post('/sendData',(req,res) => {
    res.status(200).send('Completed')
})

module.exports = app

