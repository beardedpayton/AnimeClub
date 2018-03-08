<template>
  <v-layout>
    <v-flex xs4>
      <div class="poster-img">
        <img
          :src="summaryData.posterImage.small"
          :alt="summaryData.canonicalTitle"
        >
      </div>
    </v-flex>
    <v-flex xs6>
      <div class="synopsis">
        <h2>{{ summaryData.canonicalTitle }}</h2>
        <p>{{ summaryData.synopsis }}</p>
        <p>Age Rating: {{summaryData.ageRating}} - {{summaryData.ageRatingGuide}} </p>
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
  margin-top: 20px;
}
</style>
