// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongo DB server\n' + err);
    }
    console.log('Connected to Mongo DB server successfully');

    const db = client.db('TodoApp');
    const todos = db.collection('Todos');
    //deleteMany
    // db.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
    //     console.log(result.result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({completed:true}).then((result) => {
    //     console.log(result.result);
    // });
    //findOneAndDelete
    todos.findOneAndDelete({completed:true}).then((result) => {
        console.log(result);
    });
    client.close();
});