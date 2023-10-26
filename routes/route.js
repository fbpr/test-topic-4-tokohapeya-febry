const express = require('express');
const router = express.Router();
const userRoute = require('./user.route');
const morgan = require('morgan');

router.use(morgan('dev'));

router.use('/user', userRoute);
router.use('/:userId/profile', profileRoute);
router.use('/brand', brandRoute);
router.use('/:brandId/type', typeRoute);

module.exports = router;
