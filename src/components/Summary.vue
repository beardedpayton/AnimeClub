<template>
  <v-layout row wrap>
    <v-flex md4 sm6>
      <div class="poster-img">
        <img
          :src="summaryData.posterImage.small"
          :alt="summaryData.canonicalTitle"
        >
      </div>
      </v-flex>
    <v-flex md4 sm6>
      <div class="synopsis">
        <h2>{{ summaryData.canonicalTitle }}</h2>
        <p class="short-synopsis" v-if="summaryData.synopsis.length >= 500">
          {{summaryData.synopsis.substring(0,500) + '...'}}
          <br><a @click="displayMore">Read More</a>
        </p>
        <p class="full-synopsis" v-else>{{ summaryData.synopsis }}</p>
        <p class="hidden-on-load">{{ summaryData.synopsis }}</p>
      </div>
    </v-flex>
    <sidebar :sidebar="summaryData"/>
  </v-layout>
</template>

<script>
import Sidebar from '@/components/sidebar'

export default {
  name: 'Summary',
  props: ['summaryData'],
  components: {
    Sidebar
  },
  methods: {
    displayMore () {
      document.querySelector('.short-synopsis').classList.add('hidden')
      document.querySelector('.hidden-on-load').classList.add('show')
    }
  }
}
</script>

<style scoped>
.poster-img {
  display: flex;
  position: relative;
  top: -75px;
  justify-content: flex-end;
  padding-right: 35px;
}
.synopsis {
  margin-top: 20px;
}
@media (max-width: 599px) {
  .poster-img {
    display: none;
  }
}
.hidden,
.hidden-on-load {
  display: none;
}
.show {
  display: block;
}
</style>
