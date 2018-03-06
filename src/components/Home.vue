<template>
  <section id="trending">
    <div>
      <h1>Trending Anime</h1>
      <v-layout row wrap>
        <v-flex xs3 v-for="anime in trending" :key="anime.id">
          <router-link :to="{ name: 'anime-detail', params: { id: anime.id }}">
          <div class="title-wrapper">
            <img :src="anime.attributes.posterImage.medium" :alt="anime.attributes.canonicalTitle">
            <h4>{{ anime.attributes.canonicalTitle }}</h4>
          </div>
          </router-link>
        </v-flex>
      </v-layout>
    </div>
  </section>
</template>

<script>
import AnimeServices from '@/services/AnimeServices'

export default {
  name: 'Home',
  data () {
    return {
      trending: null
    }
  },
  async mounted () {
    this.trending = (await AnimeServices.trending()).data.data
  }
}
</script>

<style scoped>
#trending img {
  width: 90%;
}
.title-wrapper h4 {
  margin-bottom: 25px;
}

</style>
