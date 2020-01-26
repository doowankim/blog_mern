//token이 유효한지 체크
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require('../model/user');
const FacebookTokenStrategy = require('passport-facebook-token');
const GooglePlusTokenStrategy = require('passport-google-plus-token');


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //Header에 bearer token 값을 푼다
opts.secretOrKey = process.env.SECRET;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            userModel
                .findById(jwt_payload.id)
                .then(user => {
                    if(user) {
                        return done(null, user); //user라는 값으로 리턴
                    } else {
                        return done(null, false);
                    }
                })
                .catch(err => res.json(err));
        })

    );

    passport.use('facebookToken', new FacebookTokenStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }, async (accessToken, refreshToken, profile, cb) => {
        try {
            console.log('profile', profile);
            console.log('accessToken', accessToken);
            console.log('refreshToken', refreshToken);

            const existingUser = await userModel.findOne({ "facebook.id": profile.id });
            if (existingUser) {
                return cb(null, existingUser);
            }

            const newUser = new userModel({
                method: 'facebook',
                facebook: {
                    id: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value
                }
            });
            await newUser.save();
            // err가 없고 newUser로 리턴해준다
            cb(null, newUser);
        } catch(error) {
            cb(error, false, error.message);
        }
    }));

    passport.use('googlePlusToken', new GooglePlusTokenStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, async (accessToken, refreshToken, profile, cb) => {
        try {
            console.log('profile', profile);
            console.log('accessToken', accessToken);
            console.log('refreshToken', refreshToken);

            const existingUser = await userModel.findOne({ "google.id": profile.id });
            if (existingUser) {
                return cb(null, existingUser);
            }

            const newUser = new userModel({
                method: 'google',
                google: {
                    id: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value
                }
            });
            await newUser.save();
            // err가 없고 newUser로 리턴해준다
            cb(null, newUser);
        } catch(error) {
            cb(error, false, error.message);
        }
    }));

};
