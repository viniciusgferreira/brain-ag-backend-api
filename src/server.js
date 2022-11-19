import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
	res.send('Get its working');
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

