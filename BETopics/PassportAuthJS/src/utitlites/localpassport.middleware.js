import { Strategy } from "passport-local";
import passport from "passport";

const userG = [
    {
        username:"Kuldeep",
        password:"123",
        id:1
    }
]

passport.serializeUser((user,done) => {
    const newUser = userG.find((u) => u.username === user.username)
    done(null,newUser)
})


passport.deserializeUser((user,done) => {
    const findUser = userG.find((u) => u.id === user.id)
    done(null,findUser)
})


export default passport.use(new Strategy((username,password,done) => {



    if(!username || !password) done("Password and email missing",null)


    done(null,{username:username})
}))