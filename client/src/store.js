import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesList: "",
    movieDetail: "",
    movieSearched: ""
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
          `https://api.themoviedb.org/3/movie/${id}?api_key=00bd566fcd11988eb0fca41abee62e9a&language=en-US`
        )
        .then(movie => {
          context.commit("setOneMovies", movie.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchMovies(context, key) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=00bd566fcd11988eb0fca41abee62e9a&page=1`
        )
        .then(movie => {
          
          context.commit("setSearchedMovies", movie.data.results);

        })
        .catch(err => {
          console.log(err);
        });
    }

    // searchMovies(context,key){
    //   axios
    //   .get(
    //     `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=00bd566fcd11988eb0fca41abee62e9a&page=1`
    //   )
    //   .then(movie => {
    //     context.commit("setMovies", movie.data.results);

    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // }
  }
});
