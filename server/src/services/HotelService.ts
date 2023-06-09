import Hotel from '../models/Hotel.js';

class HotelService {
  async getAllHotels() {
    const hotels = await Hotel.find();
    return hotels;
  }

  async getHotels(destination: any) {
    const hotels = await Hotel.aggregate([{ $match: { city: destination } }]);
    return hotels;
  }

  async getHotel(id: string) {
    if (!id) {
      throw new Error('Id is not found');
    }
    const hotel = await Hotel.findById(id);
    return hotel;
  }
}

export default new HotelService();
