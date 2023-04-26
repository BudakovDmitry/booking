import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
    },
    country_code: {
      type: String,
    },
    hotel_rating: {
      type: Number,
    },
    phone_number: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  { versionKey: false },
);

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
