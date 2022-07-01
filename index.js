const express = require('express');
const app = express();
const path = require('path');
const models = require('./models/tasks');
const routes = require('./routes/todoRoute');
const Tasks = require('./controllers/todoController');
const methodOverride = require('method-override');
const testError = require('./Error')

//mongoose setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoDB', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
   .then(() => console.log('mongoose is live!'))
   .catch(err => console.log(err));


//ejs directory path setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/', routes);


//error middleware
app.use((err, req, res, next) => {
   const { status = 500, message = 'Hudson, we have a problem'} = err;
   res.status(status).send(message);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server is on ${port}`)
});