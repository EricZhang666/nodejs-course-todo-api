// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongo DB server\n' + err);
    }
    console.log('Connected to Mongo DB server successfully');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to connect to Mongo DB server', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Eric',
        age: 22,
        location: 'New Zealand'
    }, (err, result) => {
        if(err){
            return console.log('Unable to connect to Mongo DB server',err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
        //console.log(JSON.stringify(result.ops, undefined, 2));
    })

    client.close();
});