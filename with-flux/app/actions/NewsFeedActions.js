import Dispatcher from "../NewsFeedAppDispatcher";
import ActionTypes from "./ActionTypes";

let NewsFeedActions = {
  feedFetching: function() {
    Dispatcher.dispatch({ type: ActionTypes.FETCHING });
  },

  feedFetched: function(data) {
    Dispatcher.dispatch({ type: ActionTypes.FETCHED, data: data });
  }
};

export default NewsFeedActions;