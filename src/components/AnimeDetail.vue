<template>
  <section>
  <header 
    :style="{backgroundImage: 'url(' + background + ')', height: 350 + 'px'}" 
    class="cover-photo"
  >
  </header>
  <Summary :summaryData="singleTitle"/>
  </section>
</template>

<script>
import AnimeServices from '@/services/AnimeServices'
import Summary from '@/components/Summary'

export default {
  components: {
    Summary
  },
  data () {
    return {
      singleTitle: null,
      background: ''
    }
  },
  async mounted () {
    const id = this.$route.params.id
    this.singleTitle = (await AnimeServices.singleAnime(id)).data.data
    this.background = this.singleTitle.attributes.coverImage.large
  }
}
</script>

<style scoped>
section {
  position: relative;
  padding: 0;
}
.cover-photo {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
