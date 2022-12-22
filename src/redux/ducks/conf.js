export const types = {
    SET_USER_INFO: 'STATE/SET_USER_INFO',
    LOGOUT_USER: 'STATE/LOGOUT_USER',
    SET_MOBILE: 'STATE/SET_MOBILE',
    SET_PRODUCT_CATEGORY: 'STATE/SET_PRODUCT_CATEGORY',
    SET_TOKEN: 'STATE/SET_TOKEN',
    SET_OTHER_RELATION: 'STATE/SET_OTHER_RELATION',
    RESET_OTHER_RELATION: 'STATE/RESET_OTHER_RELATION',
    CURRENT_SUBMITTED_STATUS: 'STATE/CURRENT_SUBMITTED_STATUS',
    SET_PLAN_ID: 'STATE/SET_PLAN_ID',
    SET_SURVEY_PAYMENT_STATUS: 'STATE/SET_SURVEY_PAYMENT_STATUS',
    SET_PRODUCT_NAME_DATA:'STATE/SET_PRODUCT_NAME_DATA'
}

export const initialState = {
    user: {
    },
    mobile: false,
    productCategory: '',
    token: '',
    otherRelation: [
    ],
    submitForm: 0,
    planId: '',
    surveyPaymentStatus: {},
    productName:''
}

const confReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_INFO:
            return { ...state, user: action.payload }
        case types.SET_MOBILE:
            return { ...state, mobile: action.payload }
        case types.SET_PRODUCT_CATEGORY:
            return { ...state, productCategory: action.payload }
        case types.SET_TOKEN:
            return { ...state, token: action?.payload }
        case types.SET_OTHER_RELATION:
            return { ...state, otherRelation: action?.payload }
        case types.RESET_OTHER_RELATION:
            return { ...state, otherRelation: [] }
        case types.CURRENT_SUBMITTED_STATUS:
            return { ...state, submitForm: action?.payload }
        case types.SET_PLAN_ID:
            return { ...state, planId: action?.payload }
        case types.SET_SURVEY_PAYMENT_STATUS:
            return { ...state, surveyPaymentStatus: action?.payload }
            case types.SET_PRODUCT_NAME_DATA:
                return { ...state, productName: action?.payload }
        default:
            return state
    }
}
export default confReducer;
export const actions = {
    setUserData: (payload) => ({ type: types.SET_USER_INFO, payload }),
    logOutUser: () => ({ type: types.LOGOUT_USER }),
    setMobile: (payload) => ({ type: types.SET_MOBILE, payload }),
    setProductCategory: (payload) => ({ type: types.SET_PRODUCT_CATEGORY, payload }),
    setToken: (payload) => ({ type: types.SET_TOKEN, payload }),
    setOtherRelation: (payload) => ({ type: types.SET_OTHER_RELATION, payload }),
    resetOtherRelation: () => ({ type: types.RESET_OTHER_RELATION }),
    setSubmitStatus: (payload) => ({ type: types.CURRENT_SUBMITTED_STATUS, payload }),
    setPlanId: (payload) => ({ type: types.SET_PLAN_ID, payload }),
    setSurveyPaymentStatus: (payload) => ({ type: types.SET_SURVEY_PAYMENT_STATUS, payload }),
    setProductName: (payload) => ({ type: types.SET_PRODUCT_NAME_DATA, payload }),

}