<template>
<div>
    <h2>search</h2>
      <v-layout class='movies'>
      <!-- {{filteredList}} -->
   
      <v-card
        class='movie'
        max-width="20em"   
        v-for="(movie,index) in filteredList" :key='index'  
      >
        <v-img
          :src="getImages(movie.poster_path)"
          aspect-ratio="0.8"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{movie.title}}</h3>
            <div>{{movie.overview}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Spicy Enough?</v-btn>
        <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
        </v-card-actions>
      </v-card>
  </v-layout>
</div>

</template>
<script>

import axios from "axios";

export default {
  data() {
    return {
      listSearched: []
    };
  },
  methods: {
    getImages(img) {
      return `http://image.tmdb.org/t/p/w185/${img}`;
    },
    searchMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${
            this.$route.params.key
          }&api_key=00bd566fcd11988eb0fca41abee62e9a`
        )
        .then(movie => {
          this.listSearched = movie.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.searchMovies();
  },

  computed: {
    filteredList() {
      this.searchMovies();

      return this.listSearched.filter(list => {
        return list.title
          .toLowerCase()
          .includes(this.$route.params.key.toLowerCase());
      });
    }
  }
};
</script>

