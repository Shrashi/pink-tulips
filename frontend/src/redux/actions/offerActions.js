import { ACTION_TYPES } from "../../utils/constants";
import OfferService from "../../services/OfferService";

const { GET_LATEST_OFFERS } = ACTION_TYPES;

const offerService = new OfferService();

export const getLatestOffers = () => {
  return async (dispatch) => {
    const { data } = await offerService.getLatestOffers();

    dispatch({ type: GET_LATEST_OFFERS, payload: { list: data } });
  };
};
