import { Router } from 'express';
import HotelController from '../../controllers/HotelController.js';

const hotelRouter: Router = Router();

hotelRouter.get('', HotelController.getAllHotels);
hotelRouter.get('/:id', HotelController.getHotel);

export default hotelRouter;
