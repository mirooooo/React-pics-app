import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a2e14e2aae87dfb16ddd2246469d1b37f18b4f9812fe51a8cf58023a90a4a195"
  }
});
