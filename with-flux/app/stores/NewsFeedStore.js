import NewsFeedAppDispatcher from '../NewsFeedAppDispatcher';
import {EventEmitter} from "events";
import ActionTypes from '../actions/ActionTypes';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';
let newsFeeds = [];

let NewsFeedStore = assign({}, EventEmitter.prototype, {

  getFeeds: function() {
    return newsFeeds;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

NewsFeedStore.dispatchToken = NewsFeedAppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.FETCHED:
      if(!action.data.error) {
        newsFeeds = action.data;
      }
      NewsFeedStore.emitChange();
      break;

    default:// do nothing
  }
});

export default NewsFeedStore;