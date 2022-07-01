const Tasks = require('../models/tasks');

//index logic
exports.getTodo = async (req, res, next) => {
   try{
   const allTasks = await Tasks.find({})
   res.render('task/index', { allTasks })
   } catch(err) {
      next(err)
   }
};

//create and save task logic
exports.createTodo = (req, res) => {
   res.render('task/newpost');
};

exports.saveTodo = async (req, res, next) => {
   try{
   const newTask = new Tasks(req.body)
   await newTask.save();
   res.redirect(`/tasks/${newTask._id}`)
   } catch(err){
      next(err);
   }
};

//find and view task details logic
exports.infoTodo = async (req, res, next) => {
   try{
   const { id } = req.params;
   const foundID = await Tasks.findById(id)
   if(!foundID) {
      throw new Error('Task Does Not Exist', 404);
   }
   res.render('task/details', { foundID })
   } catch(err) {
      next(err);
   }
};

//update and submit task logic
exports.fetchTodo = async (req, res, next) => {
   try{
   const { id } = req.params;
   const editTask = await Tasks.findById(id);
   if(!editTask) {
      return res.status(404).send("invalid inputs")
   }
   res.render('task/taskedits', { editTask })
   } catch(err) {
      next(err);
   }
};

exports.updateTodo = async (req, res, next) => {
   try{
   const { id } = req.params;
   const postTask = await Tasks.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
   res.redirect(`/tasks/${postTask._id}`);
   } catch(err){
next(err)
   }
};

//delete task logic
exports.deleteTodo = async (req, res) => {
   const { id } = req.params;
   await Tasks.findByIdAndDelete(id);
   res.redirect('/tasks');
};

