import { Response, Request } from 'express';
import HotelService from '../services/HotelService.js';

class HotelController {
  async getAllHotels(req: Request, res: Response) {
    try {
      let hotels = [];
      if (req.query.destination && req.query.destination.length) {
        hotels = await HotelService.getHotels(req.query.destination);
      }
      if (!req.query.destination) {
        hotels = await HotelService.getAllHotels();
      }
      return res.json(hotels);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getHotel(req: Request, res: Response) {
    try {
      const hotel = await HotelService.getHotel(req.params.id);
      return res.json(hotel);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new HotelController();
