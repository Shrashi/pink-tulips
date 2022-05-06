import { ACTION_TYPES } from "../../utils/constants";
import LabTestService from "../../services/LabTestService";

const { GET_LAB_TESTS } = ACTION_TYPES;
const labTestService = new LabTestService();
export const getLabTests = () => {
  return async (dispatch) => {
    const { data } = await labTestService.getLabTests();
    dispatch({ type: GET_LAB_TESTS, payload: { list: data } });
  };
};
