import React from "react";
import ReactDOM from "react-dom";
import NewsFeed from "./components/NewsFeed";
import FeedService from "./FeedService";

let renderer = (newsFeeds) => ReactDOM.render(
  <NewsFeed newsFeeds={newsFeeds}/>,
  document.getElementById('react-newsfeed')
);

let intervalId = setInterval(() =>
  new FeedService().fetch()
    .then((feeds) => renderer(feeds))
    .catch((error) => console.log("Error:", error)),
  1000
);