import { createSelector } from "reselect";

import { getWorkspace } from ".";

export const getHome = createSelector(getWorkspace, (data) => data.home);

export const getHomeSort = createSelector(getHome, (data) => data.sort);

export const getHomeData = createSelector(
  getHome,
  (state) => state.data
);

export const getModalStatus = createSelector(
  getHome,
  (state) => state.modalInfo
);
