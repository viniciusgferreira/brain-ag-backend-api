import { pool } from '../../models/farms-db.js';

//handle json from user and delete farm in database
export default async function deleteFarm(req, res) {
	const query = {
		text: 'DELETE from farms where id = $1',
		values: [req.params.id]
	};
	pool.query(query, (err) => {
		if (err) {
			console.log(err);
			res.status(500).end();
		} else {
			res.status(200).json();
		}
	});
}

