export const types = {
  SEND_OTP: "LOGIN/SEND_OTP",
  SEND_OTP_SUCCESS: "LOGIN/SEND_OTP_SUCCESS",
  SEND_OTP_FAIL: "LOGIN/SEND_OTP_FAIL",

  VERIFY_OTP: "LOGIN/VERIFY_OTP",
  VERIFY_OTP_SUCCESS: "LOGIN/VERIFY_OTP_SUCCESS",
  VERIFY_OTP_FAIL: "LOGIN/VERIFY_OTP_FAIL",

  GET_USER_PROFILE_DATA: "LOGIN/GET_USER_PROFILE_DATA",
  GET_USER_PROFILE_DATA_SUCCESS: "LOGIN/GET_USER_PROFILE_DATA_SUCCESS",
  GET_USER_PROFILE_DATA_FAIL: "LOGIN/GET_USER_PROFILE_DATA_FAIL",

  RESET_MEMBER_STATUS: "LOGIN/RESET_LOGIN_DATA",
};

export const initialState = {
  otp: {
    data: null,
    isLoading: false,
    error: null,
  },
  verify: {
    data: null,
    loading: false,
    error: null,
  },
  userProfile: {
    data: null,
    loading: false,
    error: null,
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_DATA:
      return {
        ...state,
        userProfile: { isLoading: true, data: null, error: false },
      };

    case types.GET_USER_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        userProfile: { isLoading: false, data: action.data, error: false },
      };

    case types.GET_USER_PROFILE_DATA_FAIL:
      return {
        ...state,
        userProfile: { isLoading: false, data: action.data, error: true },
      };

    case types.SEND_OTP:
      return { ...state, otp: { isLoading: true, data: null, error: null } };

    case types.SEND_OTP_SUCCESS:
      return {
        ...state,
        otp: { isLoading: false, error: false, data: action.data },
      };

    case types.SEND_OTP_FAIL:
      return {
        ...state,
        otp: { isLoading: false, error: true, data: action.data },
      };

    case types.VERIFY_OTP:
      return {
        ...state,
        verify: { isLoading: true, data: null, error: false },
      };

    case types.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        verify: { isLoading: false, error: false, data: action.data },
      };

    case types.VERIFY_OTP_FAIL:
      return {
        ...state,
        verify: { isLoading: false, error: true, data: action.data },
      };

    case types.RESET_MEMBER_STATUS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default loginReducer;
export const actions = {
  sendOtp: (payload) => ({ type: types.SEND_OTP, payload }),
  verifyOtp: (payload) => ({ type: types.VERIFY_OTP, payload }),
  getUserProfile: (payload) => ({ type: types.GET_USER_PROFILE_DATA, payload }),
  resetLoginData: () => ({ type: types.RESET_MEMBER_STATUS }),
};
