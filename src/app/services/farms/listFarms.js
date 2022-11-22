import { pool } from '../../models/farms-db.js';

//Send json to user from database
export default async function listFarms(req, res) {
	pool.query('SELECT * FROM farms', (err, results) => {
		if (err) {
			console.log(err);
			res.status(400).send(err).end();
		} else {
			res.status(200).json(results.rows);
		}
	});


}

