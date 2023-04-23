import { Router } from 'express';
import DestinationsController from '../../controllers/DestinationsController.js';



const destinationsRouter: Router = Router();

destinationsRouter.get('', DestinationsController.getAllDestinations);

export default destinationsRouter;
