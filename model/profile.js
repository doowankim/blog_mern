// const mongoose = require('mongoose');
// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     avatar: { //프로필 이미지(자동으로 생성되게 할거임), npm install gravatar
//         type: String
//     },
//     date: {
//         type: Date,
//         default: Date.now //필수 값은 아니지만 안맞다면 현재시간으로 맞춰줌
//     }
// });
//
// module.exports = mongoose.model('user', userSchema);

const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId, // users의 내용에 있는 id가 들어간다.
        ref: 'users'
    },
    handle: { //문구(자기소개)
        type: String,
        required: true,
        max: 40
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    address: {
        type: String
    },
    status: { //필수요
        type: String,
        required: true
    },
    skills: {
        type: [String], //여러가지 언어를 사용할 수도 있기 때문에 배열
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                defalut: false
            },
            description: {
                type: String
            }
        }
    ],
    education: [
        {
            school: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldofstudy: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean, //true: 재학중, false: 졸업 (Boolean은 참,거짓)
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    social: {

    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('profile', profileSchema);