<template>
  <section>
    <v-layout>
      <v-flex xs12>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import AnimeServices from '@/services/AnimeServices'

export default {
  data () {
    return {
      singleTitle: null,
      tabs: ['Summary', 'Episodes', 'Characters'],
      text: 'test'
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
