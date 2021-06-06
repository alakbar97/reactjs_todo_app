import * as actionTypes from "./actionTypes";

export const createTask = (data) => ({
  type: actionTypes.CREATE_TASK,
  payload: { data },
});

export const toggleModal = (data) => ({
  type: actionTypes.TOGGLE_MODAL,
  payload: { data },
});

export const removeTask = (id) => ({
  type: actionTypes.REMOVE_TASK,
  payload: { id },
});

export const updateTask = (data) => ({
  type: actionTypes.UPDATE_TASK,
  payload: { data },
});

export const sortBy = (sort) => ({
  type: actionTypes.SORT_BY,
  payload: { sort },
});
