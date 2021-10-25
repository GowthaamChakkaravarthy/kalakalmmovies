import express from 'express';
const router = express();

import * as UserCtrl from '../controllersFrontend/User.controller';


router.route('/register').post(UserCtrl.register);
router.route('/login').post(UserCtrl.login);
export default router;