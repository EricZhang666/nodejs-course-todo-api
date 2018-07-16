// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongo DB server\n' + err);
    }
    console.log('Connected to Mongo DB server successfully');

    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b4c50a65bce1a29fd9b4309')
    },{
        $set:{completed: true}
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });
    //client.close();
});