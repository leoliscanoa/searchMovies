<template>
  <v-container>
    <v-layout justify-center row wrap>
      <v-flex xs12>
        <v-card dark elevation="5" max-height="28em">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" absolute color="orange" dark fab right small top>
                <v-icon>mdi-eye</v-icon>
              </v-btn>
            </template>
            <span>Watch more</span>
          </v-tooltip>
          <v-img
            :src="movie.Poster"
            aspect-ratio="1.1"
            class="white--text align-end"
            contain
          >
          </v-img>
          <v-card-title class="body-1">
            <span
              class="d-inline-block text-truncate"
              style="max-width: 18em;"
            >
              {{ movie.Title }}
            </span>
          </v-card-title>
          <v-divider dark/>
          <v-card-actions>
            <v-btn disabled text>
              {{ movie.Type }}
            </v-btn>
            <v-spacer/>
            <v-btn disabled text>
              {{ movie.Year }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name : 'MovieCard',
  props: {
    movie: {
      type   : Object,
      default: () => {
        return {
          Poster: '',
          Title : '',
          Type  : '',
          Year  : '',
          imdbID: ''
        }
      }
    }
  },
  data : () => ({
    value: ''
  })
}
</script>
