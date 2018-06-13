import * as express from 'express';
import * as routes from './routes';

const app = express();
app.use('/hello', routes.HelloWorldRoute);

export default app;