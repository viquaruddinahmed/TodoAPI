//const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) =>{
	if(err){
		return console.log('Unable to Connect mongodb server');
	}
		console.log('Connected to mongodbserver');
		const db = client.db('TodoApp');

		/*db.collection('Todos').insertOne({
			text: 'something to do',
			completed: false
		}, (err, result) => {
			if(err){
				return console.log('unable to insert todo', err);
			}

			console.log(JSON.stringify(result.ops, undefined, 2));
		})*/

		db.collection('Users').insertOne({
			name: 'Viquar',
			age: 24,
			location: 'Paris'
		}, (err, result) => {
			if(err){
				return console.log('unable to insert todo', err);
			}

			console.log(JSON.stringify(result.ops, undefined, 2));
		})

	client.close();
});