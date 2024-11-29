const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');


router.post('/auth/signup', userController.signUp);


router.post('/auth/login', userController.login);


router.post('/auth/logout', userController.logout);

router.post('/auth/coupons',userController.getCouponCode);



router.get('/auth/coupons/:couponCode', userController.getUserCoupons);


router.post('/auth/bookings',userController.bookShow);

module.exports = router;