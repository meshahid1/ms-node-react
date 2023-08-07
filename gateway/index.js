const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const app = express();
app.use(cors());

app.use('/post', proxy('http://localhost:8080'));
app.use('/comment', proxy('http://localhost:8081'));

app.listen(8082, () => console.log(`listening to port 8082`))