const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    var db = client.db('Todos');    
    console.log('connected to mongodb server');

    db.collection('apple').insertOne({
        text:'Something to do.',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })

    client.close();
});
