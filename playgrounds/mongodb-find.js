// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongo DB server\n' + err);
    }
    console.log('Connected to Mongo DB server successfully');

    const db = client.db('TodoApp');

    //find a doc
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b4701f327c5160130b71cc5')
    // }).toArray().then((docs) =>{
    //     console.log('Todos: \n');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    //count specific docs
    db.collection('Users').find({name:'Eric'}).count().then((count) =>{
        console.log(`Number of users: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //client.close();
});