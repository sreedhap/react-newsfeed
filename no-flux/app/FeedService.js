import axios from "axios";

class FeedService {
  fetch() {
    return axios.get("http://localhost:3001")
      .then(response => response.data)
      .catch(response => []);
  }
}

export default FeedService;