const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: { //프로필 이미지(자동으로 생성되게 할거임), npm install gravatar
        type: String
    },
    date: {
        type: Date,
        default: Date.now //필수 값은 아니지만 안맞다면 현재시간으로 맞춰줌
    }
});

module.exports = mongoose.model('user', userSchema);