import { pool } from '../../models/farms-db.js';

//Send json to user from database
export default async function totalFarms(req, res) {
	pool.query('select (select sum(total_area) as total_area_hc from farms), (select count(*) as farms_count from farms);', (err, results) => {
		if (err) {
			console.log(err);
			res.status(400).send(err).end();
		} else {
			res.status(200).json(results.rows);
		}
	});


}

