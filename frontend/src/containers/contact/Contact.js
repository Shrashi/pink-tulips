import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import flask from "../../assets/flask.png";
import { useSelector } from "react-redux";
import useActions from "../../utils/hooks/useActions";
import * as labTestActions from "../../redux/actions/labTestActions";
import CardCarousel from "../../components/Carousel/CardCarousel";

const Contact = () => {
  const actions = useActions(labTestActions);
  const data = useSelector(({ labTests }) => labTests.list);
  useEffect(() => {
    fetchLabTests();
  }, []);
  const fetchLabTests = () => {
    actions.getLabTests();
  };
  return (
    <div>
      <CardCarousel
        headerText={"Lab Tests"}
        backgroundText={"Welcome"}
        data={data}
      />
    </div>
  );
};
export default Contact;
