import express from 'express';
const router = express();

import * as TokenCtrl from '../controllersFrontend/movie.controller';

router.route('/FavouriteMovie').post(TokenCtrl.FavouriteMovieFun);
router.route('/removeFavourite').post(TokenCtrl.removeFavourite);
router.route('/getFavouriteMovies').get(TokenCtrl.getFavouriteMovies);
export default router;