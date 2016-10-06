jest.autoMockOff();
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import NewsFeedItem from "../../app/components/NewsFeedItem";

describe("NewsFeedItem", function() {
    it("should render the news feed item", function() {
        let renderedRoot = TestUtils.renderIntoDocument(<NewsFeedItem feedText="test feed" />);
        let feedDom = TestUtils.findRenderedDOMComponentWithClass(renderedRoot, "feed");
        expect(ReactDOM.findDOMNode(feedDom).textContent).toEqual("test feed");
    });

    it("should render a dash if feed item is empty", function() {
        let renderedRoot = TestUtils.renderIntoDocument(<NewsFeedItem feedText="" />);
        let feedDom = TestUtils.findRenderedDOMComponentWithClass(renderedRoot, "feed");
        expect(ReactDOM.findDOMNode(feedDom).textContent).toEqual("-");
    });
});