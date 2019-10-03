const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = 'mongodb://teddykwak:k9915402@ds141294.mlab.com:41294/node-rest-shop';

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log("MongoDB Connected..."))
            .catch(err => console.log(err));






const port = 3200;
app.listen(port, console.log(`Server running on port ${port}`)); //``: 특수문자를 사용해서 자바스크립트를 불러옴, listen이 서버를 불러옴