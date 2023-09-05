import { createStore } from 'vuex';

import globalData from './modules/globalData';

const store = createStore({
  modules: {
    globalData,
  },
});

export default store;
