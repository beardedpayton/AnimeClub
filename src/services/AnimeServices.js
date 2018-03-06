import Api from '@/services/Api'

export default {
  trending () {
    return Api().get('trending/anime')
  },
  singleAnime (id) {
    return Api().get(`anime/${id}`)
  }
}
