<template>
  <v-flex md3>
    <div class="details">
      <h3>Anime Details</h3>
      <ul>
        <li><strong>English</strong><br>{{sidebar.titles.en}}</li>
        <li><strong>Romanized</strong><br>{{sidebar.titles.en_jp}}</li>
        <li><strong>Japanese</strong><br>{{sidebar.titles.ja_jp}}</li>
        <li><strong>Synonyms</strong><br><span v-for="title in sidebar.abbreviatedTitles" :key="title">{{title}}</span></li>
        <li><strong>Type</strong>{{sidebar.subtype}}</li>
        <li><strong>Episodes</strong>{{sidebar.episodeCount}}</li>
        <li><strong>Status</strong>{{sidebar.status}}</li>
        <li><strong>Aired</strong>{{sidebar.startDate}} to {{sidebar.endDate}}</li>
      </ul>
    </div>
    </v-flex>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['sidebar']
}
</script>

<style scoped>
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
.details strong {
  padding-right: 20px;
}
</style>
