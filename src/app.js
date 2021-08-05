import express from 'express';

import { twitRoutes } from './routes/routes.js';
import './helpers/redis.js';

const port = 3000;
const app = express();
const router = express.Router()

router.use('/twits', twitRoutes);
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
