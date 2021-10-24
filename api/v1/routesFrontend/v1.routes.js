import express from 'express';
const Router = express();

import Token from './token.routes';
Router.use('/token',Token);

import User from './User.routes';
Router.use('/user',User);

export default Router;
