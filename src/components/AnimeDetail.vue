<template>
  <section class="anime-detail">
  <header
    :style="{backgroundImage: 'url(' + background + ')', height: 350 + 'px'}"
    class="cover-photo"
  >
  </header>
  <Summary :summaryData="singleTitle.attributes"/>
  <Details :detailData="singleTitle.attributes"/>
  </section>
</template>

<script>
import AnimeServices from '@/services/AnimeServices'
import Summary from '@/components/Summary'
import Details from '@/components/Details'

export default {
  components: {
    Summary, 
    Details
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
.anime-detail {
  position: relative;
  padding: 0;
}
.cover-photo {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
