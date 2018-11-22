// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongo DB server\n' + err);
    }
    console.log('Connected to Mongo DB server successfully');

    const db = client.db('TodoApp');
    const users = db.collection('Users');

    users.findOneAndUpdate({name:"Eric"},{$set:{name: "Erica"}},{returnOriginal:false})
    .then((result)=>{
        console.log(result);
        return users.findOneAndUpdate({name:result.value.name},{$set:{age: 28}},{returnOriginal:false});
    }).then(result=>{
        console.log(result);
        client.close();})
    .catch(err => console.log(err));
    
});