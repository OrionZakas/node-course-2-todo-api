// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('595ba533acc535097894c485')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5955195a1fd44520a479375b')
  }, {
    $set: {
      name: 'Orion'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});




//challenge Users name: Bob, update to Orion. Use Increment by one
/* $inc {
  _id: "",
  quantity: 1
}

*/
