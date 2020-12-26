const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findByIdAndRemove('5fe716d54b6ddd5a4354c849').then((todo) => {
    console.log(todo);
});