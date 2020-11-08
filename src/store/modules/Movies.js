import axios from 'axios'

const state = {
  search: '',
  movies: [],
  movie : {
    title     : '',
    Year      : null,
    Rated     : '',
    Released  : '',
    Genre     : '',
    Director  : '',
    Writer    : '',
    Actors    : '',
    Plot      : '',
    Language  : '',
    Country   : '',
    Awards    : '',
    Poster    : '',
    imdbRating: '',
    imdbVotes : '',
    imdbID    : '',
    Type      : '',
    Production: ''
  },
  total : 0,
  page  : 1,
  pages : 0,
  items : 0,
  load  : false
}
const getters = {
  getSearch: state => state.search,
  getMovies: state => state.movies,
  getMovie : state => state.movie,
  getTotal : state => state.total,
  getPage  : state => state.page,
  getPages : state => state.pages,
  getItems : state => state.items,
  getLoad  : state => state.load
}
const mutations = {
  setSearch (state, search) { state.search = search },
  setMovies (state, movies) { state.movies = movies },
  setMovie (state, movie) { state.movie = movie },
  setTotal (state, total) { state.total = total },
  setPage (state, page) { state.page = page },
  setPages (state, pages) { state.pages = pages },
  setItems (state, items) { state.items = items },
  setLoad (state, load) { state.load = load }
}
const actions = {
  async getMoviesBySearchByPage ({ commit }, search) {
    commit('setLoad', true)
    commit('setSearch', search.search)
    await axios.get(`https://www.omdbapi.com/?apikey=${process.env.VUE_APP_APIKEY}&s=${search.search}&page=${search.page}`)
      .then(res => {
        commit('setMovies', res.data.Search)
        commit('setTotal', res.data.totalResults)
        commit('setItems', res.data.Search.length)
        commit('setPages', Math.ceil(res.data.totalResults / res.data.Search.length))
      })
      .catch(e => {
        return e
      })
      .finally(() => { commit('setLoad', false) })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
