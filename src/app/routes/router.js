import { Router } from 'express';
import addFarm from '../services/farms/addFarm.js';
import listFarmById from '../services/farms/listFarmById.js';
import listFarms from '../services/farms/listFarms.js';

export const router = Router();

//LIST FARMS
router.get('/farms', listFarms);
router.get('/farms/:id', listFarmById);

//ADD NEW FARM
router.post('/farms', addFarm);
//EDIT FARM INFO

//DELETE FARM
