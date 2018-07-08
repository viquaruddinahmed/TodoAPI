const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) =>{
	if(err){
		return console.log('Unable to connect to database', err);
	}
	const db = client.db('TodoApp');
/*	db.collection('Todos').findOneAndUpdate(
		{_id: new ObjectID('5b423292e3838021ec6536f3')},
		{ $set:{
			completed: true
		}},
		{
			returnOriginal: false
		}).then((res) =>{
			console.log(res);
		});*/

	db.collection('Users').findOneAndUpdate(
		{_id: new ObjectID('5b423376dc8acd20389242d8')},
		{ $set:{
			completed: true,
			height: '560cms'
		},$inc:{
			age: 1
		}},
		{
			returnOriginal: false
		}).then((res) =>{
			console.log(res);
		});
	client.close();

});