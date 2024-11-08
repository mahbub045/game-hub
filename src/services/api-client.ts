import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c17a4e4e8a514199bf0b1adfbc8d919a",
  },
});
