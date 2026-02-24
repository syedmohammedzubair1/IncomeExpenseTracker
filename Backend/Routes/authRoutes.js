const authRouter = require("express").Router();
const User = require("../Models/User");
const { register, login } = require("../Controllers/authController");

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/",async(req,res)=>{
    let users=await User.find()
    res.json(users);
})

module.exports = authRouter;
