import axiosInstance from './axiosInstance'

export const getCoins = async () => {
  try {
    const response = await axiosInstance.get('/coins')
    return response.data.coins
  } catch (error) {
    console.log(error.message)
    return { name: error.message, description: '' }
  }
}
