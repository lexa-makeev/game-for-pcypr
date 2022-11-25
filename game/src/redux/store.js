import { configureStore } from "@reduxjs/toolkit";

import update from "./slicers/updateAllSlicer";

const store = configureStore({
  reducer: {
    update,
  },
});

export default store;
