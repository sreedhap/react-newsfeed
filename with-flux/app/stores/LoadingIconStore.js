const CHANGE_EVENT = 'change';
let isLoading = true;

import NewsFeedAppDispatcher from '../NewsFeedAppDispatcher';
import {EventEmitter} from "events";
import ActionTypes from '../actions/ActionTypes';
import assign from 'object-assign';

let LoadingIconStore = assign({}, EventEmitter.prototype, {

  isLoading: function() {
    return isLoading;
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

LoadingIconStore.dispatchToken = NewsFeedAppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionTypes.FETCHING:
      isLoading = true;
      LoadingIconStore.emitChange();
      break;

    case ActionTypes.FETCHED:
      isLoading = false;
      LoadingIconStore.emitChange();
      break;

    default:
    // do nothing
  }
});

export default LoadingIconStore;