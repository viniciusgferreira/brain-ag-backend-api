import { pool } from '../../models/farms-db.js';

//handle json from user and add to database
export default async function addFarm(req, res) {
	const { document, productor_name, farm_name, state, city, total_area, area_agriculture, area_vegetation, cultures } = req.body;
	const query = {
		text: 'INSERT INTO farms(document, productor_name, farm_name, state, city, total_area, area_agriculture, area_vegetation, cultures) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
		values: [document, productor_name, farm_name, state, city, total_area, area_agriculture, area_vegetation, cultures]
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

