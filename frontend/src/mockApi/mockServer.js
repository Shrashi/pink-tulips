import { latestOffers } from "./mockData";

export const getMockData = (url) => {
  let offers;
  if (/latest-offers/.test(url)) {
    offers = getLatestOffers();
  }
  return { success: true, data: offers, message: "successfully received" };
};
const getLatestOffers = () => {
  return latestOffers;
};
