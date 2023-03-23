import axiosInstance from './axiosInstance';

export const recoveryService = async (user) => {

  try {
    let username = user.includes("@") ? user : parseInt(user);
    let data = { username }
    const resp = await axiosInstance.post('/recovery/verifyPassword', data);
    return resp.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
export const codecoveryService = async (token, code) => {

  try {
    console.log(token, code)
    const resp = await axiosInstance.post('/recovery/forgotPassword', { token, code });
    return resp.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export const updatePasswordService = async (token, password, repassword) => {

  try {
    console.log(token, password, repassword)
    const resp = await axiosInstance.post('/recovery/updatePassword', { token, password, repassword });
    return resp.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}


export default recoveryService;