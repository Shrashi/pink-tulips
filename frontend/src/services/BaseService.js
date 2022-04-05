import _request from "superagent";
import { getMockData } from "../mockApi/mockServer";

class BaseService {
  request = (options) => {
    const { method, url, headers, body, params } = options;
    console.log("options are", options);
    const skippedUrls = ["/latest-offers"];
    if (skippedUrls.includes(url)) {
      console.log("hello");
      return new Promise((resolve, reject) => {
        const data = getMockData(url);

        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    }
  };
}
export default BaseService;
