<template>
    <v-layout class='movies' v-if="this.$route.name==='search'">

<!-- {{movieSearched}} -->
      <v-card
      class='movie'
        max-width="20em"   
        v-for="(movie,index) in movieSearched" :key='index'  
        
      >
        <v-img
          :src="getImages(movie.poster_path)"
          aspect-ratio="0.8"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{movie.original_title}}</h3>
            <!-- {{moviesList}} -->
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <p></p>
            <div>{{movie.overview}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">
              <router-link :to='`/movie/${movie.title}`'>More</router-link>
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-layout>


   <v-layout class='movies' v-else>

<!-- {{movieSearched}} -->
      <v-card
      class='movie'
        max-width="20em"   
        v-for="(movie,index) in moviesList" :key='index'  
        
      >
        <v-img
          :src="getImages(movie.poster_path)"
          aspect-ratio="0.8"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{movie.original_title}}</h3>
            <!-- {{moviesList}} -->
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <p></p>
            <div>{{movie.overview}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">
              <router-link :to='`/movie/${movie.title}`'>More</router-link>
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-layout>
  
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["getMovies", "searchMovies"]),
    getImages(img) {
      return `http://image.tmdb.org/t/p/w185/${img}`;
    }
  },
  created() {
    //   this.searchMovies();
  },
  mounted() {
    this.getMovies();
  },
  computed: {
    ...mapState({ moviesList: "moviesList", movieSearched: "movieSearched" })
  }
};
</script>
