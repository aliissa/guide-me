import * as api from '@/api'

export const actions = {
  getItems ({commit}, payload) {
    // commit LOADING until the promise is fulfilled
    commit('LOADING')
    // structure the parameters to pass them to the api class
    var parameters = '&ll=' + payload.latitude + ',' + payload.longitude
    if (payload.radius && payload.radius !== 0) {
      parameters += '&radius=' + payload.radius
    }
    if (payload.query && payload.query.length > 0) {
      parameters += '&query=' + payload.query
    }
    return api.fetchItems(parameters)
      .then((response) => {
        if (response.data) {
          // if there's data in the response commit SET_ITEMS and SUCCESS to display data
          commit('SET_ITEMS', response.data.response.groups)
          // replace the loading state with the success state to show the list of items
          commit('SUCCESS')
        }
      })
      .catch(() => {
        // commit error if the promise was rejected, also I am demonstrating here how to handle the server errors and
        // translate them to application friendly error.
        // for the purpose of this assignment, I am assuming that I am getting the error 400.
        commit('ERROR', {
          status: 400,
          message: 'an error has occured'
        })
      })
  },

  // reset the itemList state to empty array
  clearItems ({commit}) {
    commit('CLEAR_ITEMS')
  },
  triggerLoading ({commit}) {
    commit('LOADING')
  }
}