import axios from "axios"; 
import config from "./config.js";

const userClient = axios.create({
    baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1',
    timeout: 100000,
    headers: {
      'Content-Type': 'application/json',
      'Accept' : 'application/json'
    },
  });



  export default userClient