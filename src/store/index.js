import UserService from '@/services/UserService'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {}
  },
  getters: {
    getUserById: state => id => {
      return state.users.find(user => user.id === id)
    }
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_USER(state, user) {
      state.user = user
    },
    UPDATE_USER(state, { email, firstName, lastName}) {
      const user = state.user
      user.email = email
      user.first_name = firstName
      user.last_name = lastName
    }
  },
  actions: {
    async fetchUsers({ commit }, { delay, page }) {

      await UserService.getUsers(delay,page)
        .then(response => {
          commit('SET_USERS', response.data.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateUser({ commit }, {email, firstName, lastName}){

      commit('UPDATE_USER', {email, firstName, lastName})
    },
    async setUser({ commit }, user){
      await commit('SET_USER', user)
    }
  }
})
