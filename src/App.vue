<template>
  <v-app>
    <v-app-bar
      app
      color="purple darken-4"
      dark
    >
      <p class="text-h5 mt-2">Movies Finder</p>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/andresliscanoa/searchMovies"
        target="_blank"
        text
      >
        <span class="mr-2">andresliscanoa</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer absolute app>
      <v-spacer/>
      <span>API powered By <strong><a href="https://omdbapi.com/" target="_blank">omdbapi</a></strong></span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
<style>
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: purple;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: mediumpurple;
}
</style>
