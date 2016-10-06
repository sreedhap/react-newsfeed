jest.autoMockOff();
import FeedService from "../app/FeedService";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

describe("FeedService", function() {

  it("should return the news feed response", function(done) {
    let feeds = ["feed1", "feed2"];
    new AxiosMockAdapter(axios).onGet("http://localhost:3001").reply(200, feeds);

    new FeedService().fetch().then((fetchedFeeds) => {
      expect(fetchedFeeds).toEqual(feeds);
      done();
    })
  });

  it("should return an empty feed response if backend fails", function(done) {
    new AxiosMockAdapter(axios).onGet("http://localhost:3001").reply(500, "some error");

    new FeedService().fetch().then((fetchedFeeds) => {
      expect(fetchedFeeds).toEqual([]);
      done();
    })
  });

});