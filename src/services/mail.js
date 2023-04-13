import axiosInstance from "./axiosInstance";
import axios from "axios";
//import AsyncStorage from "@react-native-async-storage/async-storage";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic Y2h1bGk6MTIzNDU2`,
  },
};

const mailService = async (datos, type, idRecomendador = null) => {
  try {
    let backUrl = "http://localhost:5000";
    let typeUrl = `
    ${backUrl}${
      type === "b2c"
        ? `/api/user${idRecomendador ? `?recommenderId=${idRecomendador}` : ""}`
        : "/api/creator"
    }`;
    console.log(typeUrl);
    const respLogin = await axios.post(typeUrl, datos, config);
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
