
import axios from 'axios';

const REG_URL = "http://localhost:4000/auth/register";

export const RegisterService = (username, password) => {
  return axios.post(REG_URL, {
    username,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  })
}
