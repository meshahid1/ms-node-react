const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const appEvents = require('./routes/app-events.js');
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const {PORT, mongoUri} = require('./config');


const app = express();
app.use(cors());
app.use(bodyParser.json());
appEvents(app);
// app.use(express.json());

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
})
.then(() => console.log('mongodb connected'))
.catch((err) => console.log(err))


app.use('/', routes);

app.listen(PORT, () => console.log(`listening to port ${PORT}`))