import { ACTION_TYPES } from "../../utils/constants";
import OfferService from "../../services/OfferService";

const { GET_LATEST_OFFERS } = ACTION_TYPES;

const offerService = new OfferService();

export const getLatestOffers = () => {
  return async (dispatch) => {
    const data = await offerService.getLatestOffers();
    console.log("offer data is", data);
    dispatch({ type: GET_LATEST_OFFERS, payload: { offerList: data } });
  };
};
