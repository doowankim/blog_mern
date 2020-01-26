const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const userModel = require('../../model/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const authCheck = passport.authenticate('jwt', { session: false }); //jwt으로 인증을 한다

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


// @route POST localhost:3200/users/signup
// @desc user register
// @access Public
router.post('/signup', (req, res) => {

    const { errors, isValid } = validateRegisterInput(req.body); //사용자 입력값이 들어가면 errors, isValid로 아웃풋이 나옴

    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    userModel
        .findOne({ "local.email": req.body.email}) //findById = id만 검색, findOne = id를 제외하고 나머지를 검색

        .then(user => {
            if(user) {

                errors.msg = 'Email already exists';
                return res.json(errors);
            } else {

                // 모델 생성
                const newUser = new userModel({
                    method: "local",
                    local: {
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    }
                });
                console.log(newUser);
                newUser.save()
                    .then(user => res.json(newUser))
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.json(err));


});

// @route POST localhost:3200/users/login
// @desc user login /return jwt
// @access Public
router.post('/login', (req, res) => {

    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

   //email이 있는지 없는지-> password 매칭-> 화면에 뿌려줌(return jwt)
    userModel
       .findOne({"local.email": req.body.email})
       .then(user => {
           if(!user){
               errors.msg = 'user not found';
               return res.json(errors);

           } else {
               bcrypt
                   .compare(req.body.password, user.local.password)
                   .then(isMatch => {
                       if(isMatch) {
                           //token에 들어갈 내용 상수화
                           const payload = { id: user._id, name: user.local.name, avatar: user.local.avatar };
                           console.log("payload", payload);
                           //token 생성
                           jwt.sign(
                               payload,
                               process.env.SECRET,
                               { expiresIn: 36000 },
                               (err, token) => {
                                   res.json({
                                       success: true,
                                       tokenInfo: 'Bearer ' + token
                                   });
                               }
                           )
                       } else {
                           errors.msg = 'password incorrect';
                           return res.json(errors);
                       }
                   })
                   .catch(err => res.json(err));
           }
       })
       .catch(err => res.json(err));
});


// @route GET localhost:3200/users/current
// @desc return current user
// @access Private
router.get('/current', authCheck, (req, res) => {

    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });

});

//total user data

// @route GET localhost:3200/users/total
// @desc total user
// @access Private
router.get('/total', authCheck, (req, res) => {
    userModel
        .find()
        .then(users => {
            res.status(200).json({
                msg: 'Successful total users',
                count: users.length,
                users: users
            });
        })
        .catch(err => res.json(err));
});

//user delete

// @route DELETE localhost:3200/users/delete/:userId
// @desc delete user
// @access Private
router.delete('/delete/:userId', authCheck, (req, res) => {
    userModel
        .remove({_id: req.params.userId})
        .then(result => {
            res.status(200).json({
                msg: 'Successful delete id'
            });
        })
        .catch(err => res.json(err));
});

//@route GET api/users/facebook
//@desc Facebook login
//@access Public
router.post('/facebook', passport.authenticate('facebookToken', {session: false}), (req, res) => {
    console.log("facebook is ", req.user);

    const payload = {id: req.user._id, name: req.user.facebook.name, avatar: req.user.facebook.avatar};

    jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 36000 },
        (err, token) => {
            res.json({
                success: true,
                tokenInfo: 'Bearer ' + token
            });
        }
    )
});

//@route GET api/users/google
//@desc Google login
//@access Public
router.post('/google', passport.authenticate('googlePlusToken', {session: false}), (req, res) => {
    console.log("google is ", req.user);

    const payload = {id: req.user._id, name: req.user.google.name, avatar: req.user.google.avatar};

    jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 36000 },
        (err, token) => {
            res.json({
                success: true,
                tokenInfo: 'Bearer ' + token
            });
        }
    )
});
module.exports = router;
