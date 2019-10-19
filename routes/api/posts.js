const express = require('express');
const router = express.Router();
const postModel = require('../../model/post');
const profileModel = require('../../model/profile');
const passport = require('passport');
const authCheck = passport.authenticate('jwt', { session: false });
const multer = require('multer'); //attachedfile 매니지먼트 (이미지만 들어가야 함)
const uploads = multer({ dest: 'uploads/' });
const validatePostInput = require('../../validation/post');

// @route POST localhost:3200/posts
// @desc Tests posts route
// @access Private

router.post('/', authCheck, uploads.single('attachedfile'), (req, res) => {
    const {errors, isValid} = validatePostInput(req.body);
    if(!isValid){
        return res.json(errors);
    }
    const newPost = new postModel({
        text: req.body.text,
        name: req.user.name,
        avatar: req.user.avatar,
        user: req.user.id,
        attachedfile: req.file.path
    });

    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.json(err));
});
// @route GET localhost:3200/posts/total
// @desc get posts
// @access Private & Public
router.get('/total', (req, res) => {
    postModel
        .find()
        .sort({ date: -1 }) //날짜에 맞춰서 최신순이 위로 게시된다
        .then(posts => {
            res.json({
                count: posts.length,
                posts: posts
            });
        })
        .catch(err => res.json(err));
});





// @route GET localhost:3200/posts/:postId
// @desc get detail posts
// @access Private
router.get('/:postId', authCheck, (req, res) => {
    const id = req.params.postId;
    postModel
        .findById({_id: id})
        .then(post => {
            if(!post){
                return res.json({
                    msg: 'There is no posts for this user'
                });
            } else{
                res.json(post);
            }
        })
        .catch(err => res.json(err));
});
// @route POST localhost:3200/posts/like/:postId
// @desc like post
// @access Private
router.post('/like/:postId', authCheck, (req, res) =>{
    profileModel
        .findOne({ user: req.user.id }) //profileModel의 누구인지 체크
        .then(profile => {
            postModel
                .findById(req.params.postId)
                .then(post => {
                    if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0 ) {
                        return res.status(400).json({
                            msg: 'User already liked this post'
                        });
                    }
                    post.likes.unshift({ user: req.user.id });
                    post
                        .save()
                        .then(post => res.json(post));
                })
                .catch(err => res.json(err));
        });
});

module.exports = router;