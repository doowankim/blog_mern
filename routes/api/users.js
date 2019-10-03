const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const userModel = require('../../model/user');




// @route POST localhost:3200/users/signup
// @desc user register
// @access Public
router.post('/signup', (req, res) => {

    userModel
        .findOne({ email: req.body.email}) //findById = id만 검색, findOne = id를 제외하고 나머지를 검색
        .then(user => {
            if(user) {
                return res.json({
                    email: 'Email already exists'
                });
            } else {
                // avatar 생성
                const avatar = gravatar.url(req.body.email, { //기본이미지에 kevin이라고 하면 k를 이미지
                    s: '200', //size
                    r: 'pg', //Rating
                    d: 'mm' //Default
                });
                // 모델 생성
                const newUser = new userModel({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: avatar, //같은 이름은 생략 가능 (avatar,)
                    password: req.body.password
                });
                // 패스워드 암호화
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => { //2차 암호화
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => res.json(err));
                    });
                });
            }
        })
        .catch(err => res.json(err));


});


module.exports = router;