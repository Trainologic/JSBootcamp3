import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';

const app = express();

app.use(cors()).use(helmet());

export default app;