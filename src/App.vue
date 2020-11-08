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
        href="https://github.com/andresliscanoa?tab=repositories"
        target="_blank"
        text
      >
        <span class="mr-2">andresliscanoa</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Search/>
      <movies-list v-show="getMovies.length > 0"/>
    </v-main>
  </v-app>
</template>

<script>
import Search         from './components/Search'
import MoviesList     from '@/components/MoviesList'
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  components: {
    Search,
    MoviesList
  },
  data      : () => ({
    //
  }),
  computed  : {
    ...mapGetters(['getMovies']),
    movies () {
      return this.getMovies
    }
  }
}
</script>
