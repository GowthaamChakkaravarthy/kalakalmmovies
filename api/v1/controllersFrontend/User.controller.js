import e from 'express';
import fs from 'fs'
import path from 'path'
import mongoose, { now } from 'mongoose';
const Config = require(path.resolve('./config/config')).default;
const Users = require(path.resolve('./models/User'));
const async = require("async");

export const register = async (req, res) => {
try {
var ReqBody = req.body;
var name = ReqBody.name;
var password = ReqBody.password;
var email = ReqBody.email;
var confirmpassword = ReqBody.confirmpassword;
var bio = ReqBody.bio;
if (password != confirmpassword ) {
    res.status(400).send({ success : false , message : 'Password and confirm password must be same' });
}

Users.find({email : email , password : password}).exec((err, data) => {
    console.log('>>>>>isexists',data);
    if (data.length > 0) {
        return res.status(200).send({ success : true , task : false , message : 'User already exists' });
    }
});


var usersData = new Users({
    name : name,
    password : password,
    bio : bio,
    email : email
});
usersData.save().then((data) => {
    res.status(200).send({ success : true , data : data });
})
.catch((e) => {
    res.status(400).send({ success : false , message : 'Something wrongs' });
})
}catch(error) {
    res.status(400).send({ success : false , message : 'Something wrong' });
}
}
export const login = async (req,res) => {
    try {
        var ReqBody = req.body;       
        var password = ReqBody.password;
        var email = ReqBody.email;

        Users.find({email : email , password : password}).exec((err, data) => {
            if (data.length == 0) {
                res.status(200).send({ success : true , message : 'Please register your account' });
            } else {
                res.status(200).send({ success : true , data : data });
            }
        });
        
    }catch(error){
        res.status(400).send({ success : false , message : 'Something wrong' });
    }
}