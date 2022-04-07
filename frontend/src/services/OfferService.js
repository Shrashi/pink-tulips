import BaseService from "./BaseService";
class OfferService extends BaseService {
  getLatestOffers = () => {
    return this.request({ url: "/latest-offers" });
  };
}

export default OfferService;
