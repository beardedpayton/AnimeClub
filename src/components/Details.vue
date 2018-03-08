<template>
  <section>
    <v-layout>
      <v-flex xs6>
        <div class="details">
          <h4>Anime Details</h4>
          <ul>
            <li>Type</li>
            <li>Episodes</li>
            <li>Status</li>
          </ul>
        </div>
      </v-flex>
      <v-flex xs4>
        <div class="trailer">
          <youtube :video-id="detailData.youtubeVideoId"></youtube>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: 'Details',
  props: ['detailData']
}
</script>

<style scoped>
.details {
  background-color: #fff;
  height: 390px;
  width: 80%;
  margin: 0 auto;
}
</style>
