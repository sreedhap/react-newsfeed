import React from "react";

class NewsFeedItem extends React.Component {
  render() {
    return <p className="feed">{this.props.feedText || "-"}</p>;
  }
}

export default NewsFeedItem;
