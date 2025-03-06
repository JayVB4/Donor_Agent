import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from '../features/auth/authUserSlice';
import donarReducer from '../features/donar/donarSlice';
import agentReducer from '../features/agent/agentSlice';

export const store = configureStore({
  reducer: {
    auth: authUserReducer,
    donar: donarReducer,
    agent: agentReducer,
  },
});
