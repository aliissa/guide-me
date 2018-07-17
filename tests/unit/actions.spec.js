import axios from "axios";
import axiosMockAdapter from "axios-mock-adapter";
import { testAction } from "./testUtils"
import { actions } from '@/store/actions'
import config from '@/config/config'
let mock = new axiosMockAdapter(axios);

describe("actions", () => {
  beforeEach(function() {
    mock.reset()
  })

  it("should commit LOADING, SET_ITEMS and SUCCESS mutations on success", done => {
    const response = {
      response: {
        data: {
          response: {
            groups: [
              "venue1", "venue2"
            ]
          }
        }
      }
    }
    const payload = {
      latitude :'33.8882499',
      longitude :'35.5037285'
    }
    mock.onGet(config.mainUrl + '?client_id=' + config.client_id + '&client_secret=' + config.client_secret + '&v='
      + config.version + '&ll=' + payload.latitude + ',' + payload.longitude).reply(200, response)
    const state = null;
    const expectedMutations = [
      {
        type: 'LOADING'
      },
      {
        type: 'SET_ITEMS',
        payload: payload
      },
      {
        type: 'SUCCESS'
      }
    ]
    testAction(actions.getItems, payload, state, expectedMutations, done)
  })

  it("should commit LOADING and ERROR mutations on error", done => {
    var payload = {
      longitude :33.89158,
      latitude :35.505624
    }
    mock.onGet(config.mainUrl + '?client_id=' + config.client_id + '&client_secret=' + config.client_secret + '&v='
      + config.version + '&ll=' + payload.longitude + ',' + payload.latitude).networkError()
    const state = null;
    const expectedMutations = [
      {
        type: 'LOADING'
      },
      {
        type: 'ERROR',
        payload: {
          status: 400,
          message: 'an error has occured'
        }
      }
    ];
    testAction(actions.getItems, payload, state, expectedMutations, done)
  })

  it("should commit mutation CLEAR_ITEMS", done => {
    const payload = null;
    const state = null;
    const expectedMutations = [
      {
        type: 'CLEAR_ITEMS'
      }
    ];
    testAction(actions.clearItems, payload, state, expectedMutations, done);
  })

  it("should commit mutation LOADING", done => {
    const payload = null;
    const state = null;
    const expectedMutations = [
      {
        type: 'LOADING'
      }
    ];
    testAction(actions.triggerLoading, payload, state, expectedMutations, done);
  })
})
