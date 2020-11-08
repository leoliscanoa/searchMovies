<template>
  <v-layout justify-center row wrap>
    <v-flex xs12>
      <Search/>
      <no-results v-show="alert"/>
      <movies-list v-show="getMovies.length > 0"/>
    </v-flex>
  </v-layout>
</template>
<script>
import Search         from '@/components/Search'
import MoviesList     from '@/components/MoviesList'
import NoResults      from '@/components/NoResults'
import { mapGetters } from 'vuex'

export default {
  name      : 'Home',
  components: {
    Search,
    MoviesList,
    NoResults
  },
  computed  : {
    ...mapGetters(['getMovies', 'getNoResults']),
    movies () {
      return this.getMovies
    },
    search () {
      return this.getSearch
    },
    alert () {
      return this.getNoResults
    }
  }
}
</script>
