import { client } from '../../models/farms-db.js';

//Send json to user from database
export default async function listFarms(req, res) {
	client.connect(function (err) {
		if (err) throw err;
		console.log('Connected!');
	});

	res.status(200).end();
}

