import LoadingIconStore from "../../app/stores/LoadingIconStore";
import NewsFeedAppDispatcher from "../../app/NewsFeedAppDispatcher"
import ActionTypes from "../../app/actions/ActionTypes"

let subscriber;

describe("LoadingStoreIcon", () => {

  it("should show loading icon and inform the subscribers when fetching the feed", () => {
    subscriber = jasmine.createSpy();
    LoadingIconStore.addChangeListener(subscriber);
    NewsFeedAppDispatcher.dispatch({type: ActionTypes.FETCHING});

    expect(subscriber).toHaveBeenCalled();
    expect(LoadingIconStore.isLoading()).toBeTruthy();
  });

  it("should hide the loading icon and inform the subscribers after fetching the feed", () => {
    subscriber = jasmine.createSpy();
    LoadingIconStore.addChangeListener(subscriber);
    NewsFeedAppDispatcher.dispatch({type: ActionTypes.FETCHED});

    expect(subscriber).toHaveBeenCalled();
    expect(LoadingIconStore.isLoading()).toBeFalsy();
  });

  it("should not inform a subscriber that hasn't registered for an event ", () => {
    subscriber = jasmine.createSpy();
    LoadingIconStore.addChangeListener(subscriber);
    NewsFeedAppDispatcher.dispatch({ type: "RandomEvent" });

    expect(subscriber).not.toHaveBeenCalled();
  });

  it("should no longer inform a subscriber if it has been removed the subscription", () => {
    subscriber = jasmine.createSpy();
    LoadingIconStore.addChangeListener(subscriber);
    LoadingIconStore.removeChangeListener(subscriber);
    NewsFeedAppDispatcher.dispatch({type: ActionTypes.FETCHED});

    expect(subscriber).not.toHaveBeenCalled();
  });
});