const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const userSchema = new mongoose.Schema({

    method: {
        type: String,
        enum: ['local', 'google', 'facebook'],
        required: true
    },

    local: {
        name: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        },
        password: {
            type: String
        },
        avatar: {
            type: String
        }
    },

    facebook: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        },
        password: {
            type: String
        },
        avatar: {
            type: String
        }
    },

    google: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        },
        password: {
            type: String
        },
        avatar: {
            type: String
        }
    }
},
    {
        // 생성날짜, 업데이트 날짜 나오는 것
        timestamps: true
    }
);

userSchema.pre("save", async function (next) {
    try {
        console.log('entered');

        if (this.method !== 'local') {
            // 빠져나간다
            next();
        }

        // avatar 생성
        const avatar = gravatar.url(this.local.email, { //기본이미지에 kevin이라고 하면 k를 이미지
            s: '200', //size
            r: 'pg', //Rating
            d: 'mm' //Default
        });
        this.local.avatar = avatar;

        const salt = await bcrypt.genSalt(10);

        const passwordHash = await bcrypt.hash(this.local.password, salt);

        this.local.password = passwordHash;
        console.log('exited');
        next();

    }
    catch (error) {
        next(error)
    }
})


module.exports = mongoose.model('users', userSchema);