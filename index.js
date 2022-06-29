//express setup

const express = require('express');
const app = express();
const path = require('path')

//mongoose crash fix, documentation did not work
//this is really annoying
const mongoose = require  ('mongoose');
mongoose.connect('mongodb://localhost:27017/test' , {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(db => console.log('mongoose is live!'))
.catch(err => console.log(err));

//ejs directory path setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.send('test run successful!. No crashes test')
})

app.listen(3000, () => {
   console.log("you are in PORT 3000")
})