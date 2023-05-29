import axios from 'axios';
const LOGIN_URL = "http://localhost:4000/auth/login";

export const LoginService = async (username,password,role) => {
  const response = await axios.post(LOGIN_URL, {
    username,
    password,
    role,
  });
  console.log(response.role);
  if (response.data.accessToken) {
 
    sessionStorage.setItem('user', JSON.stringify(response.data));
    console.log('user:', response.data)
  }
  
  return response.data;
  
};