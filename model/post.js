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
const postingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    attachedfile: {
        type: String
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('posting', postingSchema);