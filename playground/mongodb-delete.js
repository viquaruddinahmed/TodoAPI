const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) =>{
	if(err){
		return console.log('Unable to connect to database', err);
	}
	const db = client.db('TodoApp');
	/*db.collection('Todos').deleteOne({text: "eat lunch"}).then((success) => {
		console.log(success);
	});*/
	/*db.collection('Todos').deleteMany({text: "eat lunch"}).then((success) => {
		console.log(success);
	});*/

	/*db.collection('Todos').findOneAndDelete({completed : true}).then((success) =>{
		console.log(success);
	});*/

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5b4239ddb5f3dd19bc6ce5ff')})
	.then((success) => {
		console.log(success);
	});
	client.close();

});