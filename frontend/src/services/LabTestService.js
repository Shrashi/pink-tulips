import BaseService from "./BaseService";

class LabTestService extends BaseService {
  getLabTests = () => {
    return this.request({ url: "/lab-tests" });
  };
}
export default LabTestService;
