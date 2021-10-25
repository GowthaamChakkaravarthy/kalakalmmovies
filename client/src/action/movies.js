import axios from "axios";
import config from '../lib/config';

import { toast } from 'react-toastify';
toast.configure();
let toasterOption = config.toasterOption;

export const getMovies = async (payload) => {
	console.log('>>>>payload', payload);
	var sort_by = ''
	var page = payload.page;
	if (payload.sortby == 'latest') {
		sort_by = 'sort_by=release_date.desc&'
	} else {
		sort_by = 'sort_by=popularity.desc&'
	}
	console.log('>>>>payload', `https://api.themoviedb.org/3/discover/movie?${sort_by}api_key=${config.ip_key}`);
	try {
		let resp = await axios({
			'method': 'get',
			'url': `${config.movieurl}/3/discover/movie?${sort_by}page=${page}&api_key=${config.ip_key}`
		});
		console.log('>>>>>>resp', resp);
		return {
			list: resp
		}
	}
	catch (err) {
		return {
			error: 'Oops Something wrong'
		}
	}
}
export const getMoviesById = async (payload) => {
	try {
		var movieId = payload.id;
		let resp = await axios({
			'method': 'get',
			'url': `${config.movieurl}/3/movie/${movieId}?api_key=${config.ip_key}`
		});
		console.log('>>>>>>resp', resp);
		return {
			list: resp
		}
	} catch (error) {
		return {
			error: 'Oops Something wrong'
		}
	}
}
export const register = async (payload) => {
try {
let resp = await axios({
	method : 'post',
	url : `${config.localurl}/v1/user/register`,
	data : payload
})
return {
	resp : resp
}
}catch(error) {
	return {
		error: "opps something wrong"
	}
}
}
export const login = async (payload) => {
	try {
	let resp = await axios({
		method : 'post',
		url : `${config.localurl}/v1/user/login`,
		data : payload
	})
	return {
		resp : resp
	}
	}catch(error) {
		console.log('error: ', error);
		return {
			error: "Error : opps something wrong"
		}
	}
}
export const addFavourite = async (payload) => {
	try {
	let resp = await axios({
		method : 'post',
		url : `${config.localurl}/v1/movie/FavouriteMovie`,
		data : payload
	})
	return {
		resp : resp
	}
	}catch(error) {
		console.log('error: ', error);
		return {
			error: "Error : opps something wrong"
		}
	}
}
export const removFavourite = async (payload) => {
	try {
	let resp = await axios({
		method : 'post',
		url : `${config.localurl}/v1/movie/removeFavourite`,
		data : payload
	})
	return {
		resp : resp
	}
	}catch(error) {
		console.log('error: ', error);
		return {
			error: "Error : opps something wrong"
		}
	}
}
export const getFavourite = async (payload) => {
	try {
	let resp = await axios({
		method : 'get',
		url : `${config.localurl}/v1/movie/getFavouriteMovies`,
		data : payload
	})
	return {
		resp : resp
	}
	}catch(error) {
		console.log('error: ', error);
		return {
			error: "Error : opps something wrong"
		}
	}
}