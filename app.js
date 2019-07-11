const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/itemlist', {useNewUrlParser: true, useFindAndModify: false});

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const itemRouter = require('./routes/itemsRouter');




app.use('/', itemRouter);


app.use('*', (req, res) => {
    res.status(404).json('404 error')
});

app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log('Listening on 3000port....');
});
