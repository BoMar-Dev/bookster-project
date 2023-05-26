import axios from 'axios';
const LOGIN_URL = "http://localhost:4000/auth/login";

export const LoginService = async (username,password) => {
  const response = await axios.post(LOGIN_URL, {
    username,
    password,
  });
  if (response.data.accessToken) {
    sessionStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};