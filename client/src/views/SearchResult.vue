<template>
<div>
    <h1 id='search-title'>Search for {{this.$route.params.key}}</h1>

 <movieTile></movieTile>
     <router-view></router-view>

</div>

</template>
<script>
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

<style>
#search-title{
    text-align: center;
margin:2em;
}
</style>


