import { pool } from '../../models/farms-db.js';

//Send json to user from database with farms by solo
export default async function listFarmsBySolo(req, res) {

	pool.query('select sum(area_vegetation) as area_vegetation, sum(area_agriculture) as area_agriculture from farms', (err, results) => {
		if (err) {
			console.log(err);
			res.status(400).send(err).end();
		} else {
			const totalSolo = [
				{
					'id': 'Vegetação',
					'value': results.rows[0].area_vegetation
				},
				{
					'id': 'Agricultura',
					'value': results.rows[0].area_agriculture
				}
			];
			res.status(200).json(totalSolo);
		}


	});


}

