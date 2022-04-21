import axios from "axios";

const KEY = "AIzaSyBxXG2wqnHMAH7WubhWcbW-heRtwSSlXxU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY },
});
