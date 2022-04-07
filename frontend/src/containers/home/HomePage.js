import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Carousel from "../../components/Carousel/Carousel";
import useActions from "../../utils/hooks/useActions";
import * as offerActions from "./../../redux/actions/offerActions";

const HomePage = () => {
  const actions = useActions(offerActions);
  const data = useSelector(({ offers }) => {
    return offers.list;
  });

  useEffect(() => {
    fetchLatestOffers();
  }, []);
  const fetchLatestOffers = () => {
    actions.getLatestOffers();
  };
  return (
    <div>
      Home Page Being viewed
      <Carousel imgConfig={data} />
    </div>
  );
};
export default HomePage;
