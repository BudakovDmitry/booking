import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import AppRouter from './routes/index.js';
import { options } from './swagger.js';

const PORT = 5000;
const DB_URL = 'mongodb+srv://budakovdmitry:A1onxXRirlp6014o@booking.gelmsdq.mongodb.net/test';

const app = express();
const router = new AppRouter(app);

const specs = swaggerJsDoc(options);

app.use(cors());
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

router.init();

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(error);
  }
}

startApp();
