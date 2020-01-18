const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const userSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    // avatar: { //프로필 이미지(자동으로 생성되게 할거임), npm install gravatar
    //     type: String
    // },
    // date: {
    //     type: Date,
    //     default: Date.now //필수 값은 아니지만 안맞다면 현재시간으로 맞춰줌
    // }

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

        // // 패스워드 암호화
        // await bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(bodyPassword, salt, (err, hash) => { //2차 암호화
        //         if (err) throw err;
        //         this.local.password = hash;
        //
        //
        //
        //     });
        // });

    }
    catch (error) {
        next(error)
    }
})

// // password에 대해서 암호화
// userSchema
//     .virtual('password')
//     .set(function(password) {
//         this._password = password;
//         this.salt = this.makeSalt();
//         this.password = this.encryptPassword(password);
//     })
//     .get(function() {
//         return this._password;
//     });
//
// // method
// userSchema.methods = {
//     // password true or false
//     authenticate: function(plainText) {
//         return this.encryptPassword(PlainText) === this.password;
//     },
//
//     encryptPassword: function(password) {
//         if (!password) return '';
//         try {
//             return bcrypt
//                 .compare(password, this.salt)
//         }
//         catch (err) {
//             return '';
//         }
//     }
// }

module.exports = mongoose.model('users', userSchema);