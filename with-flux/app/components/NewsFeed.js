import React from "react";
import NewsFeedItem from "./NewsFeedItem";
import LoadingIcon from "./LoadingIcon";
import NewsFeedStore from "../stores/NewsFeedStore";

class NewsFeed extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = { newsFeeds: [] };
  }

  _onChange () {
    this.setState({ newsFeeds: NewsFeedStore.getFeeds() });
  }

  render () {
    let newsFeedItems = this.state.newsFeeds.map(function (feedText, index) {
      return <NewsFeedItem key={"item-" + index} feedText={feedText}/>
    });

    return (
      <div>
        <p className="placeholder">The News Feed will appear here!</p>
        {newsFeedItems}
        <LoadingIcon />
      </div>
    );
  }

  componentDidMount () {
    NewsFeedStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    NewsFeedStore.removeChangeListener(this._onChange);
  }

}

export default NewsFeed;