const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema
const tasksSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   }
}, { timestamps: true });


module.exports = mongoose.model('Tasks', tasksSchema);