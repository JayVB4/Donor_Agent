export const API = process.env.REACT_APP_BACKEND;

export const REGISTER_API = `${API}auth/users/`
export const VERIFY_EMAIL_API = `${API}auth/users/activation/`
export const LOGIN_API = `${API}auth/jwt/create/`
export const FETCH_USER_INFO_API = `${API}users/`

export const DONATION_API = `${API}donation/`
export const AGENT_ORDER_API = `${API}agent/orders/`



// constants 
export const IDLE = 'idle'
export const LOADING = 'loading'
export const SUCCESS = 'succeeded'
export const FAILED = 'failed'
export const PENDING = 'Pending'
export const COMPLETED = 'Completed'
export const PAY_ON_DELIVARY = 'ON'
export const ONLINE_PAYMENT = 'OFF'

export const ACCESS_TOKEN = 'accessToken'
export const REFRESH_TOKEN = 'refreshToken'
export const CART_ID = 'cartId'

export default API;

// REGEXP
export const INDIAN_PHONE_REGEXP = /^[6-9]\d{9}$/gi;
export const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;