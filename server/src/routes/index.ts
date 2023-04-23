import { Application } from 'express';
import hotelsRouter from './api/hotelsRouter.js';
import destinationsRouter from './api/destinationsRouter.js';


class AppRouter {
  constructor(private app: Application) {}
    init() {
      this.app.get('/', (_req, res) => {
        res.send('API Running');
      });
      this.app.use('/api/hotels', hotelsRouter);
      this.app.use('/api/destinations', destinationsRouter);
    }
}

export default AppRouter;
