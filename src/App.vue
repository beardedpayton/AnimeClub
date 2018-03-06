<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container><router-view/></v-container>
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
  background-color: #f2f2f2;
}
section {
  padding: 50px 0;
}
</style>
