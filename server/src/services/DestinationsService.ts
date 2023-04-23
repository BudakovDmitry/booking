import Destination from '../models/Destination.js';

class DestinationsService {
  async getAllDestinations() {
    const destinations = await Destination.find();
    return destinations;
  }
}

export default new DestinationsService();
