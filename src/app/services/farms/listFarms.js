//Send json to user from database
export default async function listFarms(req, res) {
	const obj = {
		name: 'vini',
		farmName: 'fazendinha'
	};
	res.json(obj);
}
