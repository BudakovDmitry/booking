import { Response, Request } from 'express';
import DestinationsService from '../services/DestinationsService.js';

class DestinationsController {
  async getAllDestinations(req: Request, res: Response) {
    try {
      const destinations = await DestinationsService.getAllDestinations();
      return res.json(destinations);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new DestinationsController();
