<template>
  <v-container fluid>
    <v-layout justify-center row wrap>
      <v-flex md6 xs12>
        <v-card dark flat>
          <v-card-title>
            <v-app-bar color="transparent" dark flat>
              <v-toolbar-title>
                Search a movie
              </v-toolbar-title>
              <v-spacer/>
            </v-app-bar>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="search"
              :append-outer-icon="search ? 'mdi-send' : ''"
              :loading="loading"
              clear-icon="mdi-close-circle"
              clearable
              color="yellow"
              filled
              label="Type a movie title, or just a word"
              type="text"
              @click:append-outer="searchMovies(search)"
              @click:clear="clearMessage"
              @keyup.enter="searchMovies(search)"
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Search',

  data    : () => ({
    search: ''
  }),
  computed: {
    ...mapGetters(['getLoad', 'getPage', 'getSearch']),
    loading () {
      return this.getLoad
    },
    page () {
      return this.getPage
    },
    search () {
      return this.getSearch
    }
  },
  methods : {
    ...mapActions(['getMoviesBySearchByPage']),
    ...mapMutations(['setMovies', 'setSearch', 'setPage', 'setPages', 'setTotal']),
    clearMessage () {
      this.search = ''
      this.setMovies([])
      this.setSearch('')
      this.setPage(1)
      this.setPages(0)
      this.setTotal(0)
    },
    searchMovies (search) {
      const find = {
        search: search,
        page  : this.page
      }
      this.getMoviesBySearchByPage(find)
    }
  }
}
</script>
