const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'dpg-cf1fh8un6mpkr6bb7vj0-a',
	database : 'alija',
	user : 'alija_user',
	password : 'HvnXfAqrBsGzhchz8UB8pqOntNpyllNg'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;