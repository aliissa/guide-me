import { expect } from 'chai'
import { mutations } from '@/store/mutations'

describe('mutations', () => {
  it('SET_ITEMS', () => {
    // mock state
    const state = {
      itemsList: null
    }
    const response = [
      {
        venue: {
          name: 'venue 1',
          location: {
            address: 'an address',
            distance: 200
          }
        }
      }
    ]
    mutations.SET_ITEMS(state, response)
    expect(state.itemsList).to.equal(response)
  })

  it('CLEAR_ITEMS', () => {
    // mock state
    const state = {
      itemsList: [
        {
          venue: {
            name: 'venue 1',
            location: {
              address: 'an address',
              distance: 200
            }
          }
        }
      ]
    }
    mutations.CLEAR_ITEMS(state)
    expect(state.itemsList).to.deep.equal([])
  })

  it('LOADING', () => {
    // mock state
    const state = {
      status: {
        loading: false,
        success: false,
        error: null
      }
    }
    mutations.LOADING(state)
    expect(state.status).to.deep.equal(
      {
        loading: true,
        success: false,
        error: null
      })
  })

  it('SUCCESS', () => {
    // mock state
    const state = {
      status: {
        loading: false,
        success: false,
        error: null
      }
    }
    mutations.SUCCESS(state)
    expect(state.status).to.deep.equal(
      {
        loading: false,
        success: true,
        error: null
      })
  })

  it('ERROR', () => {
    // mock state
    const state = {
      status: {
        loading: false,
        success: false,
        error: null
      }
    }
    const errorPayload = {
      status: 400,
      message: 'an error has occured'
    }
    mutations.ERROR(state, errorPayload)
    expect(state.status).to.deep.equal(
      {
        loading: false,
        success: false,
        error: errorPayload
      })
  })
})