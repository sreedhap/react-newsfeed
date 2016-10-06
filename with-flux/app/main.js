import React from "react";
import ReactDOM from "react-dom";
import NewsFeed from "./components/NewsFeed";
import FeedService from "./FeedService";

ReactDOM.render(
    <NewsFeed />,
    document.getElementById('react-newsfeed')
);

FeedService.start();