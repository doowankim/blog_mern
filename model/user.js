const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
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
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now //필수 값은 아니지만 안맞다면 현재시간으로 맞춰줌
    }
});

module.exports = mongoose.model('user', userSchema);