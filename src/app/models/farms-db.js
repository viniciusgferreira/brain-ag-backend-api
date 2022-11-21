import pg from 'pg';
const Client = pg.Client;

export const client = new Client({
	user: 'brainag',
	host: 'localhost',
	database: 'farmsdb',
	password: 'aussie12',
	port: 5432,
	max: 1,
	IdleTimeoutMillis: 30000
});


/* client.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');
}); */
