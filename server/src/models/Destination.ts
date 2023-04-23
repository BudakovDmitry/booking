import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;