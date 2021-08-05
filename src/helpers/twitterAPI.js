import twit from 'twit';
import { config } from 'dotenv';

config();

const T = new twit({
  consumer_key: process.env.API,
  consumer_secret:process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: false,     // optional - requires SSL certificates to be valid.
})

const search = async (searchTerm) => {
  const twitterResponse = await T.get('search/tweets', { q: '#${searchTerm}', count: 1 });
  return twitterResponse.data.statuses;
};

export { search };

