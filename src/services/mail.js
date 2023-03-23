import axiosInstance from "./axiosInstance";
//import AsyncStorage from "@react-native-async-storage/async-storage";

const mailService = async (mail, type) => {
  try {
    let datos;
    datos = {
      email: mail
    };
    let typeUrl = type === 'b2c' ? '/api/user?type=user':'/api/user?type=creator'
    const respLogin = await axiosInstance.post(typeUrl, datos);
    return respLogin.data;
  } catch (error) {
   // console.log('error FF')
    throw new Error(error);
  }
  /*try {
    let tkn = await AsyncStorage.getItem("@token_key");
    let datos;

    if (tkn === undefined || tkn === null) {
      datos = { username: !isNaN(username) ? +username : username, password };
    } else {
      datos = {
        username: !isNaN(username) ? +username : username,
        password,
        pushToken: tkn,
      };
    }
    await mainApi(datos, "/login", "POST").then((res) => {
      if (res.statusCode === 200) {
        let data = {
          token: res.data.token,
          refreshToken: res.data.refreshToken,
        };
        loginAction({ type: "sign", data: data });
        setUser("");
        setPassword("");
        navigate("Tabs");
      } else {
        dispatch(
          showModal({
            title: "Error",
            description: res.data.error,
            type: "error",
          })
        );
      }
    });*/
};
export default mailService;
