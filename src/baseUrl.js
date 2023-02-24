import axios from "axios";

const instance = axios.create({
    baseURL: 'http://ergast.com/api/f1/',
  });

  export default instance