<template>
  <section>
    <h1>Trending Anime</h1>
    <v-layout row wrap>
      <v-flex md3 v-for="anime in trending" :key="anime.id">
        <router-link :to="{ name: 'anime-detail', params: { id: anime.id }}">
          <div class="title-wrapper">
            <img :src="anime.attributes.posterImage.medium" :alt="anime.attributes.canonicalTitle">
            <h4>{{ anime.attributes.canonicalTitle }}</h4>
            <span>Start Date: {{ anime.attributes.startDate}}</span>
          </div>
        </router-link>
      </v-flex>
    </v-layout>
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
section {
  text-align: center;
}
img {
  width: 90%;
}
h1 {
  margin-bottom: 50px;
}
a {
  text-decoration: none;
  color: black;
}
.title-wrapper {
  margin: 0 auto;
  background-color: #fff;
  padding: 15px;
  width: 90%;
  margin-bottom: 50px;
  cursor: pointer;
  transition: .4s;
}
.title-wrapper:hover {
  box-shadow: 0 0 10px #737373;
  transform: scale(1.1);
}
</style>
