import React from "react";
import NewsFeedItem from "./NewsFeedItem";

class NewsFeed extends React.Component {
  render() {
    let newsFeeds = this.props.newsFeeds || [];
    return (
      <div>
        { !newsFeeds.length ? <p className="placeholder">The News Feed will appear here!</p> : null }
        {
          newsFeeds.map(function (feedText, index) {
            return <NewsFeedItem key={"item-" + index} feedText={feedText}/>
          })
        }
      </div>
    );
  }
}

export default NewsFeed;