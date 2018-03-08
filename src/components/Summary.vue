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
    <v-flex xs4>
      <div class="synopsis">
        <h2>{{ summaryData.canonicalTitle }}</h2>
        <p>{{ summaryData.synopsis }}</p>
      </div>
    </v-flex>
    <v-flex xs3>
      <div class="details">
        <h4>Anime Details</h4>
        <ul>
          <li>Type</li>
          <li>Episodes</li>
          <li>Status</li>
        </ul>
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
  display: flex;
  position: relative;
  top: -75px;
  justify-content: flex-end;
  padding-right: 35px;
}
.synopsis {
  margin-top: 20px;
}
.details {
  width: 290px;
  height: 500px;
  padding: 20px;
  margin: 20px 0 20px 35px;
  background-color: #fff;
  border: 1px solid #b7b7b7;
  border-radius: 3px;
}
.details ul {
  list-style-type: none;
}
</style>
