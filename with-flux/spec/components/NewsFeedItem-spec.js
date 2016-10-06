import NewsFeedItem from "../../app/components/NewsFeedItem"
import {render} from "enzyme"

describe("NewsFeedItem", () => {
  it("should render the news feed item", function() {
    let wrapper = render(<NewsFeedItem feedText="test feed" />);
    expect(wrapper.find(".feed").text()).toEqual("test feed");
  });

  it("should render a dash if feed item is empty", function() {
    let wrapper = render(<NewsFeedItem feedText="" />);
    expect(wrapper.find(".feed").text()).toEqual("-");
  });
});