import { config } from 'dotenv';
import { promisify } from 'util';
import redis from 'redis';

import { constructTwitterJSON } from './twitterResponseProcessor.js';
import { search } from './twitterAPI.js';

config();

let client = redis.createClient();

// const getAsync = promisify(client.get).bind(client);

client.on('connect', function() {
  console.log('Connected to Redis!');
});

client.on("error", function(error) {
  console.error(error);
});

export const setCache = async (uid, rawTwitterResponse, req, res) => {
  console.log(`uid in setCache: ${uid}`);
  client.set(uid, JSON.stringify(rawTwitterResponse), async (error, result) => { 
    if(error) {                                          
      console.log('Error in saving data in cache.');                   
    }
    // console.log(`setCache result: ${result}`);
    // console.log(`rawTwitterResponse: ${rawTwitterResponse}`);
    // console.log(rawTwitterResponse);
    const processedResponse = await constructTwitterJSON(rawTwitterResponse);
    res.status(200).json(processedResponse);
  })
}

export const getCache = async (uid, req, res) => {
  client.get(uid, async (error, rep) => {             
    if(error) {
      console.log('Cached data error.');
      res.status(500).json({error: error});
    }
    if(rep !== {} && rep) {
      console.log('Cached data present.');
      // console.log(`rep getCache: ${rep}`);
      console.log(rep);
      const processedCachedResponse = await constructTwitterJSON(JSON.parse(rep));
      res.status(200).json(processedCachedResponse);
      return true;
    }
    console.log('No cached data present.');
    console.log('Getting data from Twitter.');
    console.log(`req.params.searchParam: ${req.params.searchParam}`)
    const rawTwitterResponse = await search(req.params.searchParam);
    console.log('Saving raw data');
    await setCache(uid, rawTwitterResponse, req, res);
  })
};
