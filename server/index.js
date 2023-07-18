const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("< database link here >");

//get data from mongodb server
app.get("/getUsers", (req, res) => {
    UserModel.find({}).then((err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    });
});


//post data in mongodb server after getting from frontend interactions
app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});


//
app.listen(3001, () => {
    console.log("server runs good.")
});
