const mongoose = require('mongoose');

//schema
const tasksSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   }
}, { timestamps: true });

//compile module and exporting
const Tasks = mongoose.model('Tasks', tasksSchema);

module.exports = Tasks;