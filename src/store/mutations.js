export const mutations = {
  SET_ITEMS: (state, payload) => {
    state.itemsList = payload
  },
  CLEAR_ITEMS: (state) => {
    state.itemsList = []
  },
  LOADING: (state) => {
    state.status = {
      loading: true,
      success: false,
      error: null
    }
  },
  SUCCESS: (state) => {
    state.status = {
      loading: false,
      success: true,
      error: null
    }
  },
  ERROR: (state, payload) => {
    state.status = {
      loading: false,
      success: false,
      error: payload
    }
  }
}
