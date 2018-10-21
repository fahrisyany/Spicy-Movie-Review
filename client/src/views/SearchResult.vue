<template>
<div>
    <h2>search</h2>

 <movieTile></movieTile>
     <router-view></router-view>

</div>

</template>
<script>
// import axios from "axios";
import MovieTile from "../components/MovieTile";

export default {
  components: {
    MovieTile
  },
  data() {
    return {
      listSearched: []
    };
  },
  methods: {
    getImages(img) {
      return `http://image.tmdb.org/t/p/w185/${img}`;
    }
  },
  created() {
    // console.log(this.$route.name);

    // this.searchMovies();
  },

  computed: {
    filteredList() {
      if (this.$route.params.key.length > 1) {
        this.searchMovies();
      }
      return this.listSearched.filter(list => {
        return list.title;
        //       .toLowerCase()
        //       .includes(this.$route.params.key.toLowerCase());
      });
    }
  }
};
</script>

