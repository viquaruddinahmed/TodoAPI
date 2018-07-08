const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) =>{
	if(err){
		return console.log('Unable to connect to database', err);
	}
	const db = client.db('TodoApp');
/*	db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
		console.log(JSON.stringify(docs, undefined , 2));
	},(err) => {
		console.log('Unable to connect to database', err);
	});*/
/*
	db.collection('Todos').find().count().then((count) =>{
		console.log(`Todos count: ${count}`);
	},(err) => {
		console.log('unable to connect database', err);
	});
	client.close();*/

	db.collection('Users').find({name: 'Viquar'}).toArray().then((docs) =>{
		console.log(JSON.stringify(docs, undefined , 2));
	},(err) => {
		console.log('Unable to connect to database', err);
	});

	client.close();

});