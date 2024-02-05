import express from "express";
import  passport  from "passport";
import "../src/utitlites/localpassport.middleware.js"
import '../src/utitlites/facbook.middleware.js'
import session from "express-session";

const app = express()
app.use(express.json())
app.use(session({
    secret:'kuldeepsingh',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:600000*60,

    }}
))

app.use(passport.initialize())
app.use(passport.session())
app.post('/auth',passport.authenticate('local',{successRedirect:"/success",failureRedirect:"/faliure"}))

app.get('/success',(req,res) => {
    res.status(200).send(JSON.stringify(req.session.passport))
})

app.post('/faliure',(req,res) => {
    res.status(400).send("Falied")
})


app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',passport.authenticate('facebook', {  successRedirect: '/success',failureRedirect: '/faliure'}),(req,res) => {
    res.redirect('/success')
});


// app.use('/',(req,res) => {
//     res.status(200).send("welcome")
// })

export {app}