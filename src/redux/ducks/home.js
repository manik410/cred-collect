export const types = {
  GET_LINKED_LOANS: "LOANS/GET_LINKED_LOANS",
  GET_LINKED_LOANS_SUCCESS: "LOANS/GET_LINKED_LOANS_SUCCESS",
  GET_LINKED_LOANS_FAIL: "LOANS/GET_LINKED_LOANS_FAIL",
};

export const initialState = {
  linkedLoans: {
    data: null,
    isLoading: false,
    error: null,
  },
};

const packageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LINKED_LOANS:
      return {
        ...state,
        linkedLoans: { isLoading: true, data: null, error: null },
      };

    case types.GET_LINKED_LOANS_SUCCESS:
      return {
        ...state,
        linkedLoans: { isLoading: false, error: false, data: action.data },
      };

    case types.GET_LINKED_LOANS_FAIL:
      return {
        ...state,
        linkedLoans: { isLoading: false, error: true, data: action.data },
      };

    default:
      return state;
  }
};
export default packageReducer;
export const actions = {
  getLinkedLoans: () => ({ type: types.GET_LINKED_LOANS }),
};
