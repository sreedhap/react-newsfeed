import NewsFeedActions from "../../app/actions/NewsFeedActions";
import Dispatcher from "../../app/NewsFeedAppDispatcher";
import ActionTypes from "../../app/actions/ActionTypes";

describe("NewsFeedActions", () => {

  beforeEach(() => {
    spyOn(Dispatcher, 'dispatch').and.callThrough();
  });

  it("should inform the subscribers when the feed is being fetched", () => {
    NewsFeedActions.feedFetching();
    expect(Dispatcher.dispatch).toHaveBeenCalledWith({ type: ActionTypes.FETCHING })
  });

  it("should inform the subscribers after the feed has been fetched", () => {
    NewsFeedActions.feedFetched("someData");
    expect(Dispatcher.dispatch).toHaveBeenCalledWith({ type: ActionTypes.FETCHED, data: "someData" })
  });
});