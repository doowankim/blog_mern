const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const userModel = require('../../model/user');




// @route POST localhost:3200/users/signup
// @desc user register
// @access Public
router.post('/signup', (req, res) => {

    const avatar = gravatar.url(req.body.email, { //기본이미지에 kevin이라고 하면 k를 이미지
        s: '200', //size
        r: 'pg', //Rating
        d: 'mm' //Default
    });

    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar, //같은 이름은 생략 가능 (avatar,)
        password: req.body.password
    });
    


});


module.exports = router;