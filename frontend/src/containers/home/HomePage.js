import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import useActions from "../../utils/hooks/useActions";
import * as offerActions from "./../../redux/actions/offerActions";
import { carouselItems } from "../../utils/constants";
import OfferService from "../../services/OfferService";

const offerService = new OfferService();
const HomePage = () => {
  const actions = useActions(offerActions);
  const d = useSelector(({ offers }) => {
    return { list: offers.offerList };
  });
  console.log("offers list is", d);
  useEffect(() => {
    fetchLatestOffers();
  }, []);
  const fetchLatestOffers = () => {
    actions.getLatestOffers();
  };
  return (
    <div>
      Home Page Being viewed
      <Carousel imgConfig={carouselItems} />
    </div>
  );
};
export default HomePage;
