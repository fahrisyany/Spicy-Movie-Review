import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesList: "",
    movieDetail: "",
    movieSearched: "",
    review: ""
  },
  mutations: {
    setMovies(state, payload) {
      state.moviesList = payload;
    },
    setOneMovies(state, payload) {
      state.movieDetail = payload;
    },
    setSearchedMovies(state, payload) {
      state.movieSearched = payload;
    },
    setReview(state, payload) {
      state.review = payload;
    }
  },
  actions: {
    getMovies(context) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=00bd566fcd11988eb0fca41abee62e9a&language=en-US&page=1"
        )
        .then(movie => {
          context.commit("setMovies", movie.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    },

    getOneMovies(context, id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=00bd566fcd11988eb0fca41abee62e9a&language=en-US`,
          { crossDomain: "true" }
        )
        .then(movie => {
          // console.log(`==>get one`, movie.data);

          context.commit("setOneMovies", movie.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchMovies(context, key) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=00bd566fcd11988eb0fca41abee62e9a&page=1`,
          {
            crossDomain: "true"
          }
        )
        .then(movie => {
          context.commit("setSearchedMovies", movie.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    },

    getReviews(context, id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=00bd566fcd11988eb0fca41abee62e9a&language=en-US&page=1`,
          { crossDomain: "true" }
        )
        .then(review => {
          // console.log('===>R',review.data.results);

          context.commit("setReview", review.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
