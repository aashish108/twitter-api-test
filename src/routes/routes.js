import { Router } from 'express';
import { getTweets } from '../controller/twitter.js';

const twitRoutes = Router();

twitRoutes.get('/:searchParam', getTweets);
 
export { twitRoutes };
