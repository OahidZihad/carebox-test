import axios from "axios";

export function postData(data) {
  return axios.post(
    "https://care-box-backend.herokuapp.com/api/v1/applicant_test/",
    data
  );
}

export function getData() {
  return axios.get(
    "https://care-box-backend.herokuapp.com/api/v1/applicant_test/"
  );
}

export function updateData(data) {
  return axios.put(
    "https://care-box-backend.herokuapp.com/api/v1/applicant_test/",
    data
  );
}
// export default DataService;
