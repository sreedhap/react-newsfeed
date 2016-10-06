jest.autoMockOff();

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import NewsFeed from "../../app/components/NewsFeed";
import NewsFeedItem from "../../app/components/NewsFeedItem";

describe("NewsFeed", function() {

    it("should just render the place holder text if no feed is present", function() {
        let virtualDom = TestUtils.renderIntoDocument(<NewsFeed />);
        let placeHolder = TestUtils.findRenderedDOMComponentWithClass(virtualDom, "placeholder");
        expect(ReactDOM.findDOMNode(placeHolder).textContent).toEqual("The News Feed will appear here!");
        expect(TestUtils.scryRenderedDOMComponentsWithClass(virtualDom, "feed").length).toEqual(0);
    });

    it("should render the feeds when available", function() {
        let virtualDom = TestUtils.renderIntoDocument(<NewsFeed newsFeeds={["feed1", "feed2"]} />);
        let feeds = TestUtils.scryRenderedComponentsWithType(virtualDom, NewsFeedItem);
        expect(feeds.length).toEqual(2);
    });

    it("should not render the placeholder when feeds are available", function() {
        let virtualDom = TestUtils.renderIntoDocument(<NewsFeed newsFeeds={["feed1", "feed2"]} />);
        let placeHolder = TestUtils.scryRenderedDOMComponentsWithClass(virtualDom, "placeholder");
        expect(placeHolder.length).toEqual(0);
    });
});