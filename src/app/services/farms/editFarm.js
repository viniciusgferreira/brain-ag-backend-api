import { pool } from '../../models/farms-db.js';

//handle json from user and edit farm in database
export default async function editFarm(req, res) {
	const { document, productor_name, farm_name, state, city, total_area, area_agriculture, area_vegetation, cultures } = req.body;
	const query = {
		text: 'UPDATE farms SET (document, productor_name, farm_name, state, city, total_area, area_agriculture, area_vegetation, cultures) = ($1, $2, $3, $4, $5, $6, $7, $8, $9) where id = $10',
		values: [document, productor_name, farm_name, state, city, total_area, area_agriculture, area_vegetation, cultures, req.params.id]
	};
	pool.query(query, (err) => {
		if (err) {
			console.log(err);
			res.status(500).end();
		} else {
			res.status(201).json();
		}
	});

}

