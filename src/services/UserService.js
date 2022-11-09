import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://reqres.in`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getUsers(delay,page) {
    return apiClient.get(`/api/users?delay=${delay}&page=${page}`)
  }
}