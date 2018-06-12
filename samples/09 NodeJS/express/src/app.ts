import * as express from 'express';

import * as middlewares from './middlewares';
import * as routes from './routes';

const app = express();

app.use(middlewares.defaultMiddlewares);

app.use('/user', routes.userRoutes);

export default app;