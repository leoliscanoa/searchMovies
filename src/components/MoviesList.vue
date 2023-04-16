<template>
  <v-container fuild>
    <v-layout justify-start row wrap>
      <v-flex xs12>
        <v-container class="text-center maxWidth">
          <v-pagination
            v-model="page"
            :length="pages"
            circle
            @input="currentPage($event)"
          ></v-pagination>
        </v-container>
      </v-flex>
      <v-flex v-for="movie in movies" :key="movie.title" md3 px-1 xs12>
        <movie-card :movie="movie" class="pt-8"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import MovieCard from '@/components/MovieCard'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'MovieList',
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters(['getMovies', 'getPage', 'getTotal', 'getPages', 'getSearch', 'getType']),
    movies () {
      return this.getMovies
    },
    page () {
      return this.getPage
    },
    pages () {
      return this.getPages
    },
    searchT () {
      return this.getSearch
    }
  },
  methods: {
    ...mapActions(['getMoviesBySearchByPage']),
    ...mapMutations(['setPages', 'setPage']),
    currentPage (page) {
      this.setPage(page)
      const find = {
        search: this.searchT,
        page  : this.page,
        type: this.getType
      }
      this.getMoviesBySearchByPage(find)
    }
  }
}
</script>
<style scoped>
.maxWidth {
  max-width: 100rem;
}
</style>
