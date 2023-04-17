import axios from "axios";
const Base_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TEDB_TOKEN;

const headers = () => {
  Authentication: "bearer " + Base_URL;
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(Base_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
