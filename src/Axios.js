import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://corona.lmao.ninja/'
});
export default instance;
