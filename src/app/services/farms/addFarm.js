//import { pool } from '../../models/farms-db.js';

//handle json from user and add to database
export default async function addFarm(req, res) {
	console.log(req.body);
	res.status(200).send(req.body);

}

