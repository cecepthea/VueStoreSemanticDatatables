import Vue from 'vue'
import Vuex from 'vuex'


import PersonService from '../services/PersonService'

Vue.use(Vuex)

const state = {
  persons: []
}

const mutations = {
  ADD_PERSON (state, person) {
    state.persons.push(person)  
  
  },
  ADD_ALL_PERSONS (state, persons) {
    state.persons = state.persons.concat(persons)
  }
}

const actions = {
  addPerson ({ commit }, person) {
    commit('ADD_PERSON', person)
  }
}

const getters = {
  persons () {  
    return state.persons
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
