import axios from 'axios'
import dayjs from 'dayjs'
import jwtDecode from 'jwt-decode'
import API from '../../apis'


const BASE_URL = API


let accessToken = localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null
let refreshToken = localStorage.getItem('refreshToken') ? JSON.parse(localStorage.getItem('refreshToken')) : null

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `JWT ${accessToken}` }

})

axiosInstance.interceptors.request.use(async (req) => {

    // get access and refresh token from storage
    accessToken = localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : null
    refreshToken = localStorage.getItem('refreshToken') ? JSON.parse(localStorage.getItem('refreshToken')) : null
    req.headers.Authorization = `JWT ${accessToken}`



    // expiration time of auth acess token
    const exp = jwtDecode(accessToken).exp
    const isExpired = dayjs.unix(exp).diff(dayjs()) < 1;
    console.log('isExp', isExpired)

    // if it is not expired then simply return request else refreshing
    if (!isExpired) return req

    console.log('refreshing....')

    const response = await axios.post(`${BASE_URL}core/auth/token/refresh/`, {
        refresh: refreshToken
    })

    localStorage.setItem('accessToken', JSON.stringify(response.data.access))
    localStorage.setItem('refreshToken', JSON.stringify(response.data.refresh))
    req.headers.Authorization = `JWT ${response.data.access}`


    return req


})




export default axiosInstance;