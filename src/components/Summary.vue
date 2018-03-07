<template>
  <v-layout>
    <v-flex xs4>
      <div class="poster-img">
        <img :src="summaryData.attributes.posterImage.small" alt="">
      </div>
    </v-flex>
    <v-flex xs6>
      <div class="synopsis">
        <h2>{{ summaryData.attributes.canonicalTitle }}</h2>
        <p>{{ summaryData.attributes.synopsis }}</p>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Summary',
  props: ['summaryData']
}
</script>

<style scoped>
.poster-img {
  position: relative;
  top: -75px;
  text-align: center;
}
.synopsis {
  margin-top: 50px;
}
</style>
