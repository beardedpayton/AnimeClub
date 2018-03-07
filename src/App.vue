<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid><router-view/></v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  background-color: #f2f2f2;
}
h1,
h2,
h3,
h4 {
  font-family: 'Open Sans Condensed', sans-serif;
}
h1 {
  font-size: 42px;
}
h2 {
  font-size: 36px;
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 20px;
}
section {
  padding: 50px 0;
}
</style>
