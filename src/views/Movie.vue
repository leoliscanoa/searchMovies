<template>
  <v-container>
    <loader v-show="load"/>
    <v-layout justify-center row wrap>
      <v-flex md8 xs12>
        <v-card dark elevation="10">
          <v-card-title>
            <v-app-bar color="transparent" flat>
              {{ movie.Title }} - {{ movie.Year }} |
              <v-icon left>mdi-clock-outline</v-icon>
              {{ movie.Runtime }}
              <v-spacer/>
              <span class="caption">Rating </span>
              <v-chip :color="movie.imdbRating > 7 ? 'green' : 5 < movie.imdbRating <= 7 ? 'orange' : 'red'" small>
                {{ movie.imdbRating }}
              </v-chip>
            </v-app-bar>
          </v-card-title>
          <v-card-text>
            <v-layout justify-center row wrap>
              <v-flex md6 xs12>
                <v-img
                  :src="movie.Poster==='N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' : movie.Poster"
                  aspect-ratio="0.8"
                  class="white--text align-end"
                  contain
                >
                </v-img>
              </v-flex>
              <v-flex md6 xs12>
                <v-layout justify-center row wrap>
                  <v-flex xs12>
                    Plot: <br>
                    <v-banner
                      class="text-sm-justify mr-2"
                      two-line
                    >
                      {{ movie.Plot }}
                    </v-banner>
                  </v-flex>
                  <v-flex xs12>
                    Actors:
                    <v-banner
                      class="text-sm-justify mr-2"
                      two-line
                    >
                      {{ movie.Actors }}
                    </v-banner>
                  </v-flex>
                  <v-flex xs12>
                    Genre:
                    <v-banner
                      class="text-sm-justify mr-2"
                      two-line
                    >
                      {{ movie.Genre }}
                    </v-banner>
                  </v-flex>
                  <v-flex xs12>
                    Language:
                    <v-banner
                      class="text-sm-justify mr-2"
                      two-line
                    >
                      {{ movie.Language }}
                    </v-banner>
                  </v-flex>
                  <v-flex xs12>
                    Released:
                    <v-banner
                      class="text-sm-justify mr-2"
                      two-line
                    >
                      {{ movie.Released }}
                    </v-banner>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Loader                     from '@/components/Loader'

export default {
  name      : 'Movie',
  components: {
    Loader
  },
  data      : () => ({
    //
  }),
  computed  : {
    ...mapGetters(['getMovie', 'getLoad']),
    movie () {
      return this.getMovie
    },
    load () {
      return this.getLoad
    }
  },
  created () {
    this.findMovie(this.$route.params.id)
  },
  methods   : {
    ...mapActions(['getMovieByImdbId']),
    findMovie (id) {
      this.getMovieByImdbId(id)
    }
  }
}
</script>
