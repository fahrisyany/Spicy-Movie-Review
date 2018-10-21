<template>
  <div class="home">

<br>
<h1 id='title-latest'>Now Playing</h1>
   <br>

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
    return {};
  }
};
</script>

<style>
.movie {
  margin: 1.2em;
}

.rightBar {
  float: right;
  width: 400px;
}

.movies {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

#title-latest {
  /* border:solid red 2px; */
  margin: 0.8em;
  text-align: center;
}
</style>


