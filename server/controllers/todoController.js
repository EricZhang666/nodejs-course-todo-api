const {mongoose} = require('../db/mongoose');
const {Todo} = require('../models/todo');
//const {User} = require('../models/user');

module.exports = {
    list(req, res, next){
        return Todo.find({})
        .then(todos => res.status(200).send(todos));
    }
}