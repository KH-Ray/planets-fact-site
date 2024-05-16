import axios from "axios";

const baseUrl = "/data.json";

const getPlanets = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export { getPlanets };
