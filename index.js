//express setup

const express = require('express');
const app = express();
const path = require('path');
const Tasks = require('./models/tasks');

//mongoose setup
const mongoose = require  ('mongoose');
mongoose.connect('mongodb://localhost:27017/todoDB', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => console.log('mongoose is live!'))
.catch(err => console.log(err));

//ejs directory path setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//routes start here
app.get('/tasks', async (req, res) => {
   const allTasks = await Tasks.find({})
   res.render('task/index', { allTasks })
})
//view task details route
app.get('/tasks/:id', async (req, res) => {
const { id } = req.params;
const foundID = await Tasks.findById(id)
res.render('task/details', { foundID })
})

app.listen(3000, () => {
   console.log("you are in PORT 3000")
})