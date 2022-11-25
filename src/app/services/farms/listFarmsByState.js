import { pool } from '../../models/farms-db.js';

//Send json to user from database with farms by state
export default async function listFarmsByState(req, res) {
	pool.query('select state as id, count(state) as value from farms group by state', (err, results) => {
		if (err) {
			console.log(err);
			res.status(400).send(err).end();
		} else {
			res.status(200).json(results.rows);
		}


	});


}

