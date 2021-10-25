import express from 'express';
const Router = express();

import Movie from './movie.routes';
Router.use('/movie',Movie);

import User from './User.routes';
Router.use('/user',User);

export default Router;
