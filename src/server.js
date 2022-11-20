import express from 'express';
import { router } from './app/routes/router.js';


const port = 3000;
const app = express();

//CONTROLLER
app.use(router);

//SERVER START
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

