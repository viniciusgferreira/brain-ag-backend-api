import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
	res.send('Get Its working');
});

app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});

