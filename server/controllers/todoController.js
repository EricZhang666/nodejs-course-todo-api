const {mongoose} = require('../db/mongoose');
const {Todo} = require('../models/todo');
//const {User} = require('../models/user');

module.exports = {
    list(req, res, next){
        return Todo.find({})
        .then(todos => res.status(200).send(todos))
        .catch(next);
    },

    add(req, res, next){
        const newTodo = new Todo({
            text: req.body.text
        });
        newTodo.save().then(result => {
            res.send(result);
        }).catch(next);
    }
}