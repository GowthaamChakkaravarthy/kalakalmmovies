import e from 'express';
import fs from 'fs'
import path from 'path'
import mongoose, { now } from 'mongoose';
const Config = require(path.resolve('./config/config')).default;
const async = require("async");

// export const getMicroHistory = async (req,res) => {
// 	var ReqBody = req.body;
// 	console.log('getMicroHistory>>>>',ReqBody);
// 	try {
// 		var data =await MicroslotbookingDb.aggregate([
// 			{
// 				$match : { tokenCount : ReqBody.tokenCount }
// 			},
// 			{ 
// 				"$group": { _id : "$buyerAddress", totalSlot: { $sum: "$buyerSlot" } } 
// 			},
// 			{
// 				$lookup : {
// 					from : 'users',
// 					localField : '_id',
// 					foreignField : 'curraddress',
// 					as : 'buyerAddressDetails'
// 				}
// 			},
// 			{
// 				$unwind : { path : '$buyerAddressDetails' }
// 			}
// 		])
// 		if (data) {
// 			return res.json({ success: true, list: data });
// 		}else {
// 			return res.json({ success: true, list: [] });
// 		}
// 	}catch(error) {
// 			return res.json({ success: false, error: error });
// 	}
// } 