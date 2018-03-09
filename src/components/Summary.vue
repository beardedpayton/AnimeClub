<template>
  <v-layout row wrap>
    <v-flex md4 sm6>
      <div class="poster-img">
        <img
          :src="summaryData.posterImage.small"
          :alt="summaryData.canonicalTitle"
        >
      </div>
      </v-flex>
    <v-flex md4 sm6>
      <div class="synopsis">
        <h2>{{ summaryData.canonicalTitle }}</h2>
        <p class="short-synopsis" v-if="summaryData.synopsis.length >= 500">
          {{summaryData.synopsis.substring(0,500) + '...'}}
          <br><a @click="displayMore">Read More</a>
        </p>
        <p class="full-synopsis" v-else>{{ summaryData.synopsis }}</p>
        <p class="hidden-on-load">{{ summaryData.synopsis }}</p>
      </div>
    </v-flex>
    <v-flex md3>
      <div class="details">
        <h3>Anime Details</h3>
        <ul>
          <li><strong>English</strong><br>{{summaryData.titles.en}}</li>
          <li><strong>Romanized</strong><br>{{summaryData.titles.en_jp}}</li>
          <li><strong>Japanese</strong><br>{{summaryData.titles.ja_jp}}</li>
          <li><strong>Synonyms</strong><br><span v-for="title in summaryData.abbreviatedTitles" :key="title">{{title}}</span></li>
        </ul>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Summary',
  props: ['summaryData'],
  methods: {
    displayMore () {
      document.querySelector('.short-synopsis').classList.add('hidden')
      document.querySelector('.hidden-on-load').classList.add('show')
    }
  }
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
  font-size: 14px;
  padding: 20px;
  margin: 20px 0 20px 35px;
  background-color: #fff;
  border: 1px solid #b7b7b7;
  border-radius: 3px;
}
.details ul {
  list-style-type: none;
}
.details li {
  margin-bottom: 10px;
}
.details h3 {
  margin-bottom: 15px;
}
@media (max-width: 599px) {
  .poster-img {
    display: none;
  }
}
.hidden,
.hidden-on-load {
  display: none;
}
.show {
  display: block;
}
</style>
