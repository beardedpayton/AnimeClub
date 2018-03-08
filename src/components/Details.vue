<template>
  <section>
    <v-layout>
      <v-flex xs6>
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

</style>
