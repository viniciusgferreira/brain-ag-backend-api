import express from 'express';
import { router } from './app/routes/router.js';


const port = 3000;
const app = express();

//BODY PARSER JSON
app.use(express.json());

//CONTROLLER
app.use(router);



//SERVER START
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

