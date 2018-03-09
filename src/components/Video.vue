<template>
  <section>
    <v-layout>
      <v-flex xs6>
        <div class="trailer">
          <youtube :video-id="trailer"></youtube>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: 'Video',
  props: ['trailer']
}
</script>

<style scoped>

</style>
