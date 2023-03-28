import axios from 'axios';
//import { Buffer } from 'buffer'
///import { REACT_APP_API_BASE_URL, REACT_APP_API_USERNAME,REACT_APP_API_PASSWORD } from "@env"
//import { getUsuario } from '../storage/UsuarioAsyncStorage'
//import { useNavigation } from '@react-navigation/native'

//const API_BASE_URL = REACT_APP_API_BASE_URL
//const API_USERNAME = REACT_APP_API_USERNAME
//const API_PASSWORD = REACT_APP_API_PASSWORD

const axiosInstance = axios.create({
  baseURL: 'https://touken.io/web/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    // withCredentials: true,
    Authorization: `Basic dG91a2VuOlQwdWskZW4`
  }
})
//console.log(axiosInstance)
/*
axiosInstance.interceptors.request.use(
  async config => {
    const userLogger = await getUsuario()
    if (userLogger) {
      config.headers.Authorization = `Bearer ${userLogger.token}`
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  async function (error) {
    if (error.response.status === 401) {
      const navigation = useNavigation()
      navigation.navigate('Login')
      // return Promise.reject(new Error('Unauthorized'))
    }
    return Promise.reject(error)
  }
)*/


export default axiosInstance;
