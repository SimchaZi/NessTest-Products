import {
  A_LOAD_PRODUCTS,
  LOAD_PRODUCTS_ENDPOINT,
  LOADING_COMPLETED_SUCCESS,
  LOADING_PRISTINE,
  SET_PRODUCT_STATE
} from '../shared/constants'
import { asyncArrayConstructor } from '../shared/utility'

const namespaced = false

const state = () => {
  return {
    productState: ''
  }
}

const getters = {
}

const mutations = {
  [SET_PRODUCT_STATE]: (state, newObj) => {
    state.productState = newObj
  }
}

const actions = {
  async [A_LOAD_PRODUCTS] ({ commit, getters, state }) {
    const newState = asyncArrayConstructor()
    newState.loadingState = LOADING_PRISTINE
    commit(SET_PRODUCT_STATE, newState)
    try {
      const response = await this.$axios.get(LOAD_PRODUCTS_ENDPOINT)
      const newObj = asyncArrayConstructor()
      newObj.data = response.data.products.data.items
      newObj.loadingState = LOADING_COMPLETED_SUCCESS
      commit(SET_PRODUCT_STATE, newObj)
    } catch (e) {}
  }
}

export { namespaced, state, getters, mutations, actions }
