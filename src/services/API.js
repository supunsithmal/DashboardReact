import axios from "axios";

export const baseUrl = "https://jsonplaceholder.typicode.com";

export default class API {
  static get(url) {
    return axios.get(baseUrl + url);
  }

  static post(url, data) {
    return axios.post(baseUrl + url, data);
  }
}
