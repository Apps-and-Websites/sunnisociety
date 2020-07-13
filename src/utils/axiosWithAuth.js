import axios from "axios";

const BACKEND_HOST = process.env.DATABASE_URL;

const axioswithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: `${BACKEND_HOST}/api`,
    headers: {
      Authorization: token,
    },
  });
};

export default axioswithAuth;
