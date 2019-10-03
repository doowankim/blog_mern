const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); //env를 쓰겠다는 설정
dotenv.config();

const app = express();



mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log("MongoDB Connected..."))
            .catch(err => console.log(err));






const port = process.env.PORT || 4000;
app.listen(port, console.log(`Server running on port ${port}`)); //``: 특수문자를 사용해서 자바스크립트를 불러옴, listen이 서버를 불러옴