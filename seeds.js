// purpose of file is to populate the database with initial data before adding more on the browser or postman

const Tasks = require('./models/tasks');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoDB',
   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => {
      console.log('mongoose is live!')
   })
   .catch(err => {
      console.log(err)
   })


   // const q = new Tasks({
   //    title: 'testrun',
   //    description: 'if you see this on mongo, it works'
   // })

//    q.save().then(q => {
//       console.log(q)
//    })
// .catch(err => {
//    console.log(err)
// })

   // populate db with multiple data

   const w = [
      {
         title: 'Movie Night',
         description: 'Watch The Boys "Herogasm" again'
      },
      {
         title: 'Pick a new task',
         description: 'Visit frontend mentor'
      },
      {
         title: 'Browse reddit',
         description: 'see whats happening on the sub'
      },
      {
         title: 'Check Twitter',
         description: 'Find out whats trending on your followed topics'
      }
   ]

   Tasks.insertMany(w)
   .then(data => {
      console.log(data)
   })
.catch(err => {
   console.log(err)
})
   