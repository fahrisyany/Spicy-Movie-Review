<template>

   <v-layout class='movies'>
      <v-card
      class='movie'
        max-width="20em"   
        v-for="(movie,index) in moviesList" :key='index'  
      >
        <v-img
        :src='`http://image.tmdb.org/t/p/w185/${movie.poster_path}`'
          aspect-ratio="0.8"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{movie.title}}</h3>

                <v-rating :value=Math.ceil(movie.vote_average/2)
                ></v-rating>

                 <div class="text-xs-center">
                </div>
                <p></p>
            <div>{{movie.overview}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">

              <router-link :to='`/movie/${movie.id}`'>
                More Info
              </router-link>
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-layout>
  
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
    //   rating: this.moviesList[0].vote_average/2
    };
  },
  methods: {
    ...mapActions([
      "getNowPlayingMovies",
      "searchMovies",
      "getOneMovies",
      "getUpcoming",
      "getTopRated",
      "getPopular"
    ]),
    // getImages(img) {
    //   return `http://image.tmdb.org/t/p/w185/${img}`;
    // }
  },
  created() {
   
    switch (this.$route.path) {
      case "/discover/upcoming":
        console.log("up");

        this.getUpcoming();
        break;
      case "/discover/toprated":

        console.log("top");

        this.getTopRated();
        break;
      case "/discover/popular":

        console.log("pop");

        this.getPopular();
        break;
      default:
        this.getNowPlayingMovies();
    }
     if (this.$route.name === "search") {
      this.searchMovies(this.$route.params.key);
    }
  },
  mounted() {},
  computed: {
    ...mapState({
      moviesList: "moviesList"
    })
  }
};
</script>
