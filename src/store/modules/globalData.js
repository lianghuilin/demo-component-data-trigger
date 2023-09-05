export default {
  namespaced: true,
  state: {
    dataset: [],
  },
  mutations: {
    SET_DATASET(state, dataset) {
      state.dataset = dataset;
    },
  },
};
