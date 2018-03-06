import Api from '@/services/Api'

export default {
  trending () {
    return Api().get('trending/anime?page[limit]=5&page[offset]=0')
  },
  singleAnime (id) {
    return Api().get(`anime/${id}`)
  }
}
