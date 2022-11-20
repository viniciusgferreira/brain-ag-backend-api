import { Router } from 'express';
import listFarms from '../services/farms/listFarms.js';

export const router = Router();

//LIST FARMS
router.get('/farms', listFarms);
//ADD NEW FARM

//EDIT FARM INFO

//DELETE FARM
