import { search } from '../helpers/twitterAPI.js';
import { constructTwitterJSON } from '../helpers/twitterResponseProcessor.js';
import { getCache, setCache } from '../helpers/redis.js';

export const getTweets = async (req, res) => {
  const uid = req.params.searchParam;
  let cachedData;

  try {
    cachedData = await getCache(uid, req, res);
  } catch (e) {
    console.log(`Get cache failed: ${e}`);
  }
}
