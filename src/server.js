import express from 'express';
import cors from 'cors';
import { router } from './app/routes/router.js';


const port = 3000;
const app = express();

//BODY PARSER JSON
app.use(express.json());

// CORS
app.use(cors());
//CONTROLLER
app.use(router);



//SERVER START
app.listen(process.env.PORT || port, '0.0.0.0', () => {
	console.log(`Server is running on http://localhost:${port}`);
});

