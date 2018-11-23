const {mongoose} = require('../db/mongoose');
//const {Todo} = require('../models/todo');
const {User} = require('../models/user');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

module.exports = {
    list(req, res, next){
        return User.find()
        .then(users => res.status(200).send(users));
    },
    findById(req, res, next){
        if(ObjectID.isValid(req.params.id)){
            return User.findById(req.params.id)
            .then((user) => {
                if(user){
                    res.status(200).send(user);
                }else{
                    res.status(404).send({message:"Todo not found"});
                }
            });
        }else{
            res.status(400).send({message:'Invalid id'});
        }
        
    },
    add(req, res, next){
        const body = _.pick(req.body, ['email', 'password']);
        const newUser = new User(body);
        return newUser.save().then(result => {
            res.send(result);
        }).catch(next);
    }
}