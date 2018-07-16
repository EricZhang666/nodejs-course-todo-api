// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongo DB server\n' + err);
    }
    console.log('Connected to Mongo DB server successfully');

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
    //     console.log(result.result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({completed:true}).then((result) => {
    //     console.log(result.result);
    // });
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({_id: new ObjectID("5b4c57845bce1a29fd9b43cb")}).then((result) => {
        console.log(result);
    });
    //client.close();
});