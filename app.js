const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
const morgan = require("morgan")

const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const usersRouter = require("./routes/users.js");

const connect = require('./schemas');
connect();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('/ Test!!!');
});

app.use('/posts', [postsRouter, commentsRouter]);
app.use('/', usersRouter)


app.listen(port, () => {
    console.log(`${port} 포트로 서버가 열렸습니다.`)
})
