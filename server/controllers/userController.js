const {mongoose} = require('../db/mongoose');
//const {Todo} = require('../models/todo');
const {User} = require('../models/user');

module.exports = {
    list(req, res, next){
        return User.find({})
        .then(users => res.status(200).send(users));
    }
}