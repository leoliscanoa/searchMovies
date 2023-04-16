<template>
  <v-container>
    <v-layout justify-space-between row wrap>
      <v-flex md6 xs12>
        <v-card dark flat>
          <v-card-title>
            <v-app-bar color="transparent" dark flat>
              <v-toolbar-title>
                Search a movie, serie or episode
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
              label="Type a title or just a word"
              type="text"
              @click:append-outer="searchMovies(search)"
              @click:clear="clearMessage"
              @keyup.enter="searchMovies(search)"
            />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md4 xs12>
        <v-card dark flat>
          <v-card-title>
            <v-app-bar color="transparent" dark flat>
              <v-toolbar-title>
                Filters
              </v-toolbar-title>
              <v-spacer/>
            </v-app-bar>
          </v-card-title>
          <v-card-text>
            <v-select
              v-model="type"
              :items="items"
              color="yellow"
              item-color="yellow"
              label="Type"
              @change="currentType($event)"
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
  data: () => ({
    search: '',
    items: [
      'movie',
      'series',
      'episode'
    ]
  }),
  computed: {
    ...mapGetters(['getLoad', 'getPage', 'getSearch', 'getType']),
    loading () {
      return this.getLoad
    },
    page () {
      return this.getPage
    },
    search () {
      return this.getSearch
    },
    type () {
      return this.getType
    }
  },
  methods: {
    ...mapActions(['getMoviesBySearchByPage']),
    ...mapMutations(['setMovies', 'setSearch', 'setPage', 'setPages', 'setTotal', 'setType', 'setNoResults']),
    clearMessage () {
      this.setMovies([])
      this.setSearch('')
      this.setPage(1)
      this.setPages(0)
      this.setTotal(0)
    },
    searchMovies (search) {
      const find = {
        search: this.search,
        page: this.page,
        type: this.type || 'movie'
      }
      this.getMoviesBySearchByPage(find)
    },
    currentType (type) {
      this.setType(type)
      this.setNoResults(false)
    }
  }
}
</script>
