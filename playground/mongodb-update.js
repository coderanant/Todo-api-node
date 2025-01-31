const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MondoDB server');
    const db = client.db("TodoApp");

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5fd22720a7f7f0ba177aefec')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5f4809a8494a61e86cde5a5c')
    }, {
        $set: {
            name: 'Anant Kumar'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // client.close();
}); 