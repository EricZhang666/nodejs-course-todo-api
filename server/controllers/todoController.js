//const {mongoose} = require('../db/mongoose');
const {Todo} = require('../models/todo');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
//const {User} = require('../models/user');

module.exports = {
    list(req, res, next){
        console.log("test env");
        console.log(process.env.MONGODB_URI);
        return Todo.find()
        .then(todos => {
            res.status(200).send(todos)
        })
        .catch(next);
    },

    listByUser(req, res, next){
        return Todo.find({user:req.params.user})
        .then(todos => {
            if(todos.length === 0){
                res.status(404).send({message:"No todos found for this user"})
            }else{
                res.status(200).send(todos)
            }
        })
        .catch(next);
    },

    findById(req, res, next){
        if(ObjectID.isValid(req.params.id)){
            return Todo.findById(req.params.id)
            .then((todo) => {
                if(todo){
                    res.status(200).send(todo);
                }else{
                    res.status(404).send({message:"Todo not found"});
                }
            }).catch(next);
        }else{
            return res.status(400).send({message:'Invalid id'});
        }
        
    },

    deleteById(req, res, next){
        if(ObjectID.isValid(req.params.id)){
            return Todo.findByIdAndDelete(req.params.id)
            .then(todo => {
                if(todo){
                    res.status(200).send(todo);
                }else{
                    res.status(404).send({message:"Todo not found"})
                }
            }).catch(next);
        }else{
            res.status(400).send({message:"Invalid id"});
        }
    },

    updateById(req, res, next){
        if(!ObjectID.isValid(req.params.id)){
            return res.status(400).send({message:"Invalid id"});
        }
        const body = _.pick(req.body, ['text', 'completed']);
        if(_.isBoolean(body.completed) && body.completed) {
            body.completedAt = new Date().getTime();
        }else{
            body.completed = false;
            body.completedAt = null;
        }

        return Todo.findByIdAndUpdate(req.params.id, {$set:body}, {new: true})
        .then(todo => {
            if(todo){
                res.status(200).send(todo);
            }else{
                res.status(404).send({message:"Todo not found"});
            }
        });
    },

    add(req, res, next){
        const newTodo = new Todo({
            text: req.body.text,
            user: req.params.user
        });
        return newTodo.save().then(result => {
            res.send(result);
        }).catch(next);
    }
}