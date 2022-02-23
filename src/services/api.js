import axios from "axios";

axios.defaults.baseURL =
  "https://pixabay.com/api";
const setParams = ({q, page}) => {
  axios.defaults.params = {
    q,
    page,
    key: "25273711-e95d23ce228d19c821de1faa8",
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12
  }
}

export const getImaigesApi = ({ q, page = 1 }) => {
  setParams ({q, page})
  return axios
    .get("/")
    .then(res => res.data.hits)
    .catch(error => {throw error})
}