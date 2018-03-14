<template>
  <section class="anime-detail">
  <header
    :style="{backgroundImage: 'url(' + background + ')', height: 400 + 'px'}"
    class="cover-photo"
  >
  </header>
  <Summary :summaryData="singleTitle.attributes"/>
  <Video :trailer="singleTitle.attributes.youtubeVideoId"/>
  </section>
</template>

<script>
import AnimeServices from '@/services/AnimeServices'
import Summary from '@/components/Summary'
import Video from '@/components/Video'

export default {
  components: {
    Summary, 
    Video
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
