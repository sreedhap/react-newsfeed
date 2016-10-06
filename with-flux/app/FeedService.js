import NewsFeedActions from "./actions/NewsFeedActions";
import axios from "axios";

let intervalId;
let FeedService = {

  fetch: function() {
    NewsFeedActions.feedFetching();
    axios.get("http://localhost:3001").then((response) => {
      NewsFeedActions.feedFetched(response.data);
    }).catch(() => {
      NewsFeedActions.feedFetched({error: "Something happened!"});
    });
  },

  start: function() {
    clearInterval(intervalId);
    intervalId = setInterval(this.fetch, 1500);
  }
};

export default FeedService;