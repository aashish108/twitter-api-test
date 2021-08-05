export const constructTwitterJSON = async (data) => {
  let newArray = data.map((tweet) => ({
    tweetId: tweet.id,
    text: tweet.id,
    username: tweet.user.name,
    userScreenName: tweet.user.screen_name,
    userImage: tweet.user.profile_background_image_url_https,
    date: tweet.created_at,
    likes: tweet.favorite_count,
    retweetCount: tweet.retweet_count,
  }));

  return newArray;
};
