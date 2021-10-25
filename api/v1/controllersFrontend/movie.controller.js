import e from 'express';
import fs from 'fs'
import path from 'path'
import mongoose, { now } from 'mongoose';
const Config = require(path.resolve('./config/config')).default;
const FavouriteMovie = require(path.resolve('./models/FavouriteMovie'));
const async = require("async");

export const FavouriteMovieFun = async (req,res) => {
    try {
        var ReqBody = req.body;
        console.log('favouritemovie>>>>',ReqBody);
        var movieid = ReqBody.id;
		var original_title = ReqBody.original_title;
        var poster_path = ReqBody.poster_path;
        var backdrop_path = ReqBody.backdrop_path;
        var fm = await FavouriteMovie.find({movieid : movieid});
        if(fm.length > 0) {
            return res.status(200).send({ success : true , task : false , message : 'Already added' });
        } 
        var fm = new FavouriteMovie({
            original_title : original_title,
            poster_path : poster_path,
            backdrop_path : backdrop_path,
            movieid : movieid
        });
        var fmdata = await fm.save();
        var fmAlldata = await FavouriteMovie.find({});
        
		if (fmAlldata) {
			return res.json({ success: true, list: fmAlldata });
		}else {
			return res.json({ success: true, list: [] });
		}
	}catch(error) {
			return res.json({ success: false, error: error });
	}
} 
export const removeFavourite = async (req,res) => {
    try {
        var ReqBody = req.body;
        console.log('favouritemovie>>>>',ReqBody);
        var movieid = ReqBody.movieid;
        var fm = await FavouriteMovie.remove({movieid : movieid});
        return res.status(200).send({ success : true , task : false , message : 'Favorites removed' });        
	}catch(error) {
			return res.json({ success: false, error: error });
	}
}
export const getFavouriteMovies = async (req,res) =>  {
    try {
        var ReqBody = req.body;
        var fmAlldata = await FavouriteMovie.find({});
        
		if (fmAlldata) {
			return res.json({ success: true, list: fmAlldata });
		}else {
			return res.json({ success: true, list: [] });
		}
    }catch (error) {
        return res.json({ success: true, list: [] });
    }
}