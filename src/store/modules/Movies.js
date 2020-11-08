import axios from 'axios'

const state = {
  search   : '',
  type     : '',
  movies   : [],
  movie    : {
    Actors    : '',
    Awards    : '',
    BoxOffice : '',
    Country   : '',
    Director  : '',
    Genre     : '',
    Language  : '',
    Metascore : '',
    Plot      : '',
    Poster    : '',
    Production: '',
    Rated     : '',
    Ratings   : [],
    Released  : '',
    Response  : '',
    Runtime   : '',
    Title     : '',
    Type      : '',
    Website   : '',
    Writer    : '',
    Year      : null,
    imdbID    : '',
    imdbRating: '',
    imdbVotes : ''
  },
  total    : 0,
  page     : 1,
  pages    : 0,
  items    : 0,
  load     : false,
  noResults: false
}
const getters = {
  getSearch   : state => state.search,
  getType     : state => state.type,
  getMovies   : state => state.movies,
  getMovie    : state => state.movie,
  getTotal    : state => state.total,
  getPage     : state => state.page,
  getPages    : state => state.pages,
  getItems    : state => state.items,
  getLoad     : state => state.load,
  getNoResults: state => state.noResults
}
const mutations = {
  setSearch (state, search) { state.search = search },
  setType (state, type) { state.type = type },
  setMovies (state, movies) { state.movies = movies },
  setMovie (state, movie) { state.movie = movie },
  setTotal (state, total) { state.total = total },
  setPage (state, page) { state.page = page },
  setPages (state, pages) { state.pages = pages },
  setItems (state, items) { state.items = items },
  setLoad (state, load) { state.load = load },
  setNoResults (state, value) { state.noResults = value }
}
const actions = {
  async getMoviesBySearchByPage ({ commit }, search) {
    commit('setLoad', true)
    commit('setSearch', search.search)
    commit('setType', search.type)
    commit('setNoResults', false)
    await axios.get(`https://www.omdbapi.com/?apikey=${process.env.VUE_APP_APIKEY}&s=${search.search}&type=${search.type}&page=${search.page}`)
      .then(res => {
        if ( res.data.Response === 'True' ) {
          commit('setMovies', res.data.Search)
          commit('setTotal', res.data.totalResults)
          commit('setItems', res.data.Search.length)
          commit('setPages', Math.ceil(res.data.totalResults / res.data.Search.length))
        } else {
          commit('setMovies', [])
          commit('setTotal', 0)
          commit('setItems', 0)
          commit('setPages', 0)
          commit('setNoResults', true)
        }
      })
      .catch(e => {
        return e
      })
      .finally(() => { commit('setLoad', false) })
  },
  async getMovieByImdbId ({ commit }, id) {
    commit('setLoad', true)
    await axios.get(`https://www.omdbapi.com/?apikey=${process.env.VUE_APP_APIKEY}&i=${id}&plot=full`)
      .then(res => {
        if ( res.status === 200 ) {
          commit('setMovie', res.data)
        } else {
          commit('setMovie', {})
        }
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
