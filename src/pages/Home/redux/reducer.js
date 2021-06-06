import * as actionTypes from "./actionTypes";

const initialState = {
  data: [],
  showModal: false,
  modalInfo: {
    showModal: false,
    id: "",
  },
  sort: "",
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case actionTypes.CREATE_TASK:
      return {
        ...state,
        data: [...state.data, payload.data],
      };

    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalInfo: payload.data,
      };

    case actionTypes.REMOVE_TASK:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== payload.id),
      };

    case actionTypes.UPDATE_TASK:
      const array = [...state.data];
      let foundItemIndex = array.findIndex(
        (item) => item.id === payload.data.id
      );
      array[foundItemIndex] = payload.data;

      return {
        ...state,
        data: array,
      };

    case actionTypes.SORT_BY:
      return {
        ...state,
        sort: payload.sort,
      };

    default:
      return state;
  }
};

export default reducer;
