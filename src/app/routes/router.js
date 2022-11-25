import { Router } from 'express';
import addFarm from '../services/farms/addFarm.js';
import listFarmById from '../services/farms/listFarmById.js';
import listFarms from '../services/farms/listFarms.js';
import editFarm from '../services/farms/editFarm.js';
import deleteFarm from '../services/farms/deleteFarm.js';
import listFarmsByState from '../services/farms/listFarmsByState.js';
import listFarmsByCulture from '../services/farms/listFarmsByCulture.js';
import listFarmsBySolo from '../services/farms/listFarmsBySolo.js';
import totalFarms from '../services/farms/totalFarms.js';

export const router = Router();

//LIST FARMS
router.get('/farms', listFarms);
router.get('/farms/:id', listFarmById);
router.get('/farms-total', totalFarms);


//ADD NEW FARM
router.post('/farms', addFarm);
//EDIT FARM INFO
router.put('/farms/:id', editFarm);
//DELETE FARM
router.delete('/farms/:id', deleteFarm);

//DASHBOARD
router.get('/graph-state', listFarmsByState);
router.get('/graph-culture', listFarmsByCulture);
router.get('/graph-solo', listFarmsBySolo);
