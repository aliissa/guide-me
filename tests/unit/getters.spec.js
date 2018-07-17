import { expect } from 'chai'
import { getters } from '@/store/getters'

describe('getters', () => {
  it('itemsList', () => {
    let itemsList = [
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
    // mock state
    const state = {
      itemsList
    }

    expect(getters.itemsList(state)).to.deep.equal(itemsList)
  })

  it('status', () => {
    const state = {
      status: {
        loading: false,
        success: false,
        error: null
      }
    }

    expect(getters.status(state)).to.deep.equal(
      {
        loading: false,
        success: false,
        error: null
      })
  })
})