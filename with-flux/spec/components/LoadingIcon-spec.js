import LoadingIcon from "../../app/components/LoadingIcon"
import NewsFeedAppDispatcher from "../../app/NewsFeedAppDispatcher"
import ActionTypes from "../../app/actions/ActionTypes"
import {mount} from "enzyme"

describe("LoadingIcon", () => {
  it("should show the loading icon when fetching", function() {
    NewsFeedAppDispatcher.dispatch({type: ActionTypes.FETCHING});
    let wrapper = mount(<LoadingIcon />);
    expect(wrapper.find(".loading").text()).toEqual("...");
  });

  it("should hide the loading icon after fetching", function() {
    NewsFeedAppDispatcher.dispatch({type: ActionTypes.FETCHED});
    let wrapper = mount(<LoadingIcon />);
    expect(wrapper.find(".loading").isEmpty()).toBeTruthy();
  });
});