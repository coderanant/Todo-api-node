const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MondoDB server');
    const db = client.db("TodoApp");

    // db.collection('Todos').find({
    //     _id: new ObjectID('5f480868aa8be8e77cf2545d')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Anant Kumar'}).count().then((count) => {
        console.log(`Users Count : ${count}`);
    }, (err) => {
        console.log(err);
    })
    // client.close();
}); 