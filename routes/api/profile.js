const express = require('express');
const router = express.Router();
const profileModel = require('../../model/profile');
const passport = require('passport');
const validateProfileInput = require('../../validation/profile');
const validateEducationInput = require('../../validation/education');
const authCheck = passport.authenticate('jwt', { session: false });

// @route GET localhost:3200/total
// @desc Tests profile total
// @access Public

router.get('/total', (req, res) => {
    profileModel
        .find()
        .then(users => {
            res.status(200).json({
                msg: 'total users profile',
                count: users.length,
                users: users
            });
        })
        .catch(err => res.json(err));
});

// @route GET localhost:3200/profile/:profile_id
// @desc detail profile get
// @access Private
router.get('/:profile_id',authCheck, (req, res) => {
    const id = req.params.profile_id;
    profileModel
        .findById(id)
        .then(profile => {
            if(!profile){
                return res.json({msg: 'There is no frofile for this user'});
            } else {
                res.json(profile);
            }
        })
        .catch(err => res.json(err));
});

// @route GET localhost:3200/profile/handle/:handle
// @desc GET profile by handle
// @access Private & Public
// 검색기능(원하는 사용자를 쉽게 찾기 위함)
router.get('/handle/:handle',authCheck, (req, res) => {
    profileModel
        .findOne({handle: req.params.handle})
        .then(profile => {
            if(!profile){
                return res.json({
                    noprofile : 'There is no profile for this user'
                });
            } else {
                res.json(profile);
            }
        })
        .catch(err => res.json(err));
});





// @route POST localhost:3200/profile
// @desc register profile
// @access Private
router.post('/', authCheck, (req, res) => {

    const {errors, isValid} = validateProfileInput(req.body);
    if(!isValid){
        return res.json(errors);
    }

    const profileFields = {}; //아래 내용이 profileFields에 저장됨
    profileFields.user = req.user.id; //payload에 있는 내용 중 id
    // 사용자입력값으로 들어감
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.address) profileFields.address = req.body.address;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.githubusername) profileFields.githubusername = req.body.githubusername;

    if (typeof req.body.skills !== 'undefined') { //배열로 들어가 있다
        profileFields.skills = req.body.skills.split(','); //배열은 ,로 구분해 준다
    }

    profileModel
        .findOne({ user: req.user.id }) //중복유저가 있는지 없는지 체
        .then(profile => {
            if(profile) {
                // return res.json({ msg: 'profile exists '});
                // update
                profileModel
                    .findOneAndUpdate(
                        { user: req.user.id },
                        { $set: profileFields }, //profile에 내용이 있으면 기존 내용에 덮어씌우는 작업
                        { new: true }
                    )
                    .then(profile => res.json(profile))
                    .catch(err => res.json(err));
            } else {
                profileModel
                    .findOne({ handle: profileFields.handle })//중복유저가 있으면 안되니까 중복체크
                    .then(profile => {
                        if(profile) {
                            return res.json({msg: 'That handle already exists'});
                        } else {
                            new profileModel(profileFields)
                                .save()
                                .then(profile => res.json(profile))
                                .catch(err => res.json(err));
                        }

                    })
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.json(err));

});

// @route POST localhost:3200/profile/education
// @desc add education to profile
// @access Private
router.post('/education', authCheck, (req, res) => {
    const {errors, isValid} = validateEducationInput(req.body);
    if(!isValid){
        return res.json(errors);
    }
    profileModel
        .findOne({user: req.user.id})
        .then(profile => {
            if(!profile){
                errors.msg = 'no user'
                return res.json(errors);
            } else {
                const newEdu = { //사용자 입력값 상수화
                    school: req.body.school,
                    degree: req.body.degree,
                    fieldofstudy: req.body.fieldofstudy,
                    from: req.body.from,
                    to: req.body.to,
                    current: req.body.current,
                    description: req.body.description
                };
                profile.education.unshift(newEdu); //profile안에 education에 최신순으로 밀어넣는다 unshift(최신순)
                profile
                    .save()
                    .then(profile => res.json(profile))
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.json(err));
});

// @route POST localhost:3200/profile/exprience
// @desc add exprience to profile
// @access Private
router.post('/exprience', authCheck, (req, res) => {

});


module.exports = router;