const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

// static create method
taskSchema.statics.add = async function (title, description, status, author) {
  // validation
  if (!title || !description || !status) {
    throw Error("All fields must be filled");
  }
  // create new task
  const task = await this.create({ title, description, status, author });
  return task;
};

//getting all tasks
taskSchema.statics.getAllTask = async function () {
  tasks = await this.find().populate({
    path: "author",
    select: { name: 1 },
  });
  return tasks;
};

// static update method
taskSchema.statics.update = async function (id, title, description, status) {
  if (!id) throw new Error("Task id is required");

  if (!title || !description || !status) {
    throw Error("All fields must be filled");
  }

  const task = await this.findOneAndUpdate(
    { _id: id },
    { title, description, status },
    {
      upsert: true,
      new: true,
    }
  );

  return task;
};

// static delete method
taskSchema.statics.delete = async function (id) {
  if (!id) throw new Error("Task id is required");

  const task = await this.findOneAndDelete(id);
  if (!task) throw new Error("Task not found");

  return task;
};

module.exports = mongoose.model("Task", taskSchema);
