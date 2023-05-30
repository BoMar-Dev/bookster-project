
import axios from 'axios';

const REG_URL = "http://localhost:4000/admin/users";

export const LoginService = async (username,role) => {
  const response = await axios.post(REG_URL, {
    username,
    role,
  });
  
  if (response.data.accessToken) {
    sessionStorage.setItem('user', JSON.stringify(response.data));
    console.log('user:', response.data)
  }
  
  return response.data;
  
};
