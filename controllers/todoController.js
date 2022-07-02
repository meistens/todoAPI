let Tasks = require('../models/tasks');

//index logic, fetch all todo tasks
exports.getTodo = async (req, res, next) => {
   try{
   const tasks = await Tasks.find();
   res.status(200).send(tasks);
   } catch (err) {
      next(err);
   }
};

// create/add a todo task logic
exports.saveTodo = async (req, res, next) => {
   try{
   const newTask = new Tasks(req.body);
   await newTask.save();
   res.status(200).send(newTask);
   } catch(err){
      next(err);
   }
};

//find a todo task logic
exports.singleTodo = async (req, res, next) => {
   try{
   const { id } = req.params;
   const foundID = await Tasks.findById(id)
   if(!foundID) {
      throw new Error('Task Does Not Exist', 404);
   }
   res.send(foundID)
   } catch(err) {
      next(err);
   }
};

//update todo task logic
exports.updateTodo = async (req, res, next) => {
   try{
   const { id } = req.params;
   const postTask = await Tasks.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
   res.send(postTask);
   } catch(err){
next(err)
   }
};

//delete todo logic
exports.deleteTodo = async (req, res) => {
   const { id } = req.params;
   await Tasks.findByIdAndDelete(id);
   res.redirect('/tasks');
};