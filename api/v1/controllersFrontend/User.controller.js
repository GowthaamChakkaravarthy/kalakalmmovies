import e from 'express';
import fs from 'fs'
import path from 'path'
import mongoose, { now } from 'mongoose';
const Config = require(path.resolve('./config/config')).default;
const async = require("async");

// export const UserUpdate = async (req, res) => {
// var RetData = {};
// RetData.details = {};
// RetData.toast = {};
// var ReqBody = req.body;
// var addr = ReqBody.addr;
// let UserDet = await UserDb.findOne({ "curraddress": addr });

// if (UserDet != null) {
// 	var Resp = await UserDb.findOneAndUpdate(
// 	{ curraddress: addr },
// 	{ $set: {
// 		addr: ReqBody.currAddr,
// 		name: ReqBody.name,
// 		personalsite: ReqBody.personalsite,
// 		customurl: ReqBody.customurl,
// 		desccription: ReqBody.desccription,
// 	bio: ReqBody.bio,
// 		twitter: ReqBody.twitter,
// 		youtube: ReqBody.youtube,
// 		facebook: ReqBody.facebook,
// 		instagram: ReqBody.instagram,
// 	} },
// 	{ new: true }
// 	);
// 	if(Resp) {
// 		RetData.details = Resp;
// 		RetData.toast.type = 'success';
// 		RetData.toast.msg = 'User profile updated successfully';
// 	} else {
// 		RetData.toast.type = 'error';
// 		RetData.toast.msg = 'User profile not updated';
// 	}
// 	res.json(RetData);
// } else {
// 	var NewUser = new UserDb({
// 	"name": ReqBody.name,
// 	"personalsite": ReqBody.personalsite,
// 	"customurl": ReqBody.customurl,
// 	"curraddress": addr
// 	})
// 	NewUser.save(async function (err, Resp) {
// 	if(Resp) {
// 		RetData.data = Resp;
// 		RetData.toast.type = 'success';
// 		RetData.toast.msg = 'User profile updated successfully';
// 	} else {
// 		RetData.toast.type = 'error';
// 		RetData.toast.msg = 'User profile not updated';
// 	}
// 	res.json(RetData);
// 	})
// }
// }