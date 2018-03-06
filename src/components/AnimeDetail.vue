<template>
  <section>
    <v-layout>
      <h1>test</h1>
    </v-layout>
  </section>
</template>

<script>
import AnimeServices from '@/services/AnimeServices'

export default {
  data () {
    return {
      singleTitle: null
    }
  },
  async mounted () {
    const id = this.$route.params.id
    this.singleTitle = (await AnimeServices.singleAnime(id)).data.data
  }
}
</script>

<style>

</style>
