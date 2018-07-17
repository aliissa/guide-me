// helper for testing action with expected mutations
import { expect } from "chai"

export const testAction = (
  action,
  payload,
  state,
  expectedMutations,
  done
) => {
  let count = 0
  // mock commit
  let commit = (type, payload) => {
    let mutation = expectedMutations[count]
    try {
      // check if commit function is invoked with the right parameters
      expect(type).to.equal(mutation.type)
      if (payload) {
        expect(payload).to.deep.equal(mutation.payload)
      }
      count++
      // check if all mutations in the current action have been commited
      if (count >= expectedMutations.length) {
        done()
      }
    } catch (error) {
      done(error)
    }
  }

  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  } else {
    action({ commit, state }, payload)
  }
}