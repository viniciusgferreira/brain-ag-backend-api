import { pool } from '../../models/farms-db.js';

//handle json from user and edit farm in database
export default async function editFarm(req, res) {
	// GET ALL INPUT JSON FIELDS
	const { document, productor_name, farm_name, state, city, total_area, area_agriculture, area_vegetation, cultures } = req.body;

	// Testing area Limits (total_area = area_vegetation + area_agriculture)
	if ((area_vegetation + area_agriculture) != total_area) {
		res.status(400).send('Total area do not match sum of agriculture + vegetation area');
		return 0;
	}

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

