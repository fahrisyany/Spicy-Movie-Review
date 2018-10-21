import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesList: "",
    movieDetail: "",
    review: "",

  },
  mutations: {
    setMovies(state, payload) {
      state.moviesList = payload;
    },
    setOneMovies(state, payload) {
      state.movieDetail = payload;
    },
    
    setReview(state, payload) {
      state.review = payload;
    },
   
  },
  actions: {
    getNowPlayingMovies(context) {
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
          context.commit("setMovies", movie.data.results);
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
    },
    getPopular(context) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=00bd566fcd11988eb0fca41abee62e9a&language=en-US&page=1`,
          { crossDomain: "true" }
        )
        .then(movie => {
          context.commit("setMovies", movie.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTopRated(context) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=00bd566fcd11988eb0fca41abee62e9a&language=en-US&page=1`,
          { crossDomain: "true" }
        )
        .then(movie => {
          // console.log('ggg');

          context.commit("setMovies", movie.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUpcoming(context) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=00bd566fcd11988eb0fca41abee62e9a&language=en-US&page=1`,
          { crossDomain: "true" }
        )
        .then(movie => {
          context.commit("setMovies", movie.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
