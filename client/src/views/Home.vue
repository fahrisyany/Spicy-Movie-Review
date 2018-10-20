<template>
  <div class="home">

   <h1> Latest Movies</h1>
   
 <movieTile></movieTile>
     <router-view></router-view>

  </div>

</template>

<script>
import MovieTile from '../components/MovieTile'
// @ is an alias to /src

// import axios from "axios";

export default {
  components:{
    MovieTile
  },
  data() {
    return {
    };
  },
};
</script>

<style>
.movie {
  margin: 1.2em;
  border: red 2px solid;
}

.rightBar {
  float: right;
  border: red 2px solid;
  width: 400px;
}

.movies {
     /* flex-direction: column;  make main axis vertical */
  justify-content: center;
    /* align-items: center;   */
  display: flex;
  border: red 2px solid;
  /* width :1600px; */
  flex-wrap: wrap;
  /* display: inline-flex; */
}
</style>

