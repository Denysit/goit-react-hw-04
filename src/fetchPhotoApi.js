import axios from "axios";

 const API_KEY = "8Bz5WN6PI4xA93He7PTZICZuSRBskE-oVLIEeJP_u8A"; 

const fetchPhoto = async (searchQuery, page) => {
    const response = await axios.get("/search/photos", {
      baseURL: "https://api.unsplash.com/",
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
        Accept: "application/json",
      },
      params: {
        query: searchQuery,
        per_page: 10,
        page,
        orientation: "landscape",
      },
    });
    return response.data.results;
  } 


export default fetchPhoto

