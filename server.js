const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv'); //env를 쓰겠다는 설정
dotenv.config();

const app = express();
const userRoutes = require('./routes/api/users');
const profileRoutes = require('./routes/api/profile');
const postRoutes = require('./routes/api/posts');



mongoose.connect(process.env.MONGO_URI || "mongodb+srv://doowankim:qwer1234@cluster0-m6o3g.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log("MongoDB Connected..."))
            .catch(err => console.log(err));

app.use(passport.initialize()); //passport 초기화
require('./config/passport')(passport);
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
 //passport의 기본으로 쓰겠다 (인증)



app.use('/posts', postRoutes);
app.use('/profile', profileRoutes);
app.use('/users', userRoutes);

// 배포 코드
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
//     });
// }



const port = process.env.PORT || 7000;
app.listen(port, console.log(`Server running on port ${port}`)); //``: 특수문자를 사용해서 자바스크립트를 불러옴, listen이 서버를 불러옴