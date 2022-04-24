import { latestOffers, LAB_TEST_ITEMS } from "./mockData";

export const getMockData = (url) => {
  if (/latest-offers/.test(url)) {
    return {
      success: true,
      data: getLatestOffers(),
      message: "successfully received",
    };
  } else if (/lab-tests/.test(url)) {
    return {
      success: true,
      data: getLabTests(),
      message: "successfully received",
    };
  }
};
const getLatestOffers = () => {
  return latestOffers;
};

const getLabTests = () => {
  return LAB_TEST_ITEMS;
};
