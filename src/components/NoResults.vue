<template>
  <v-container>
    <v-layout justify-center row wrap>
      <v-alert
        border="left"
        dense
        icon="mdi-alert"
        type="warning"
      >
        No results found for <strong>{{ search }}</strong> and filter <strong>{{ type }}</strong>...
      </v-alert>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getSearch', 'getType']),
    type () {
      return this.getType
    },
    search () {
      return this.getSearch
    }
  }
}

</script>
