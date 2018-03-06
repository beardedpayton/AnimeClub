import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'

export default () => {
  return axios.create({
    baseURL: 'https://kitsu.io/api/edge/',
    headers: {'Cache-Control': 'no-cache'},
    adapter: cacheAdapterEnhancer(axios.defaults.adapter, true),
    auth: {
      username: 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd',
      password: '54d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151'
    }
  })
}
