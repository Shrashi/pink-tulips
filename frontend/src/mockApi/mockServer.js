import { latestOffers } from "./mockData";

export const getMockData = (url) => {
  let finObj;
  if (/latest-offers/.test(url)) {
    finObj = getLatestOffers();
    return finObj;
  }
  return { success: "succesfully done", data: finObj };
};
const getLatestOffers = () => {
  return latestOffers;
};
